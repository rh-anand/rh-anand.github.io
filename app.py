import streamlit as st
import pandas as pd
import numpy as np
from geopy.geocoders import Nominatim
from geopy.distance import geodesic
import folium
from streamlit_folium import folium_static
import requests
from PIL import Image
from io import BytesIO
import base64
import json

# Load state boundary data
with open('us-states.json', 'r') as f:
    state_boundaries = json.load(f)

# NFL team locations and colors
nfl_teams = {
    'Arizona Cardinals': {'coords': (33.5277, -112.2626), 'color': '#97233F', 'logo': 'https://a.espncdn.com/i/teamlogos/nfl/500/ari.png'},
    'Atlanta Falcons': {'coords': (33.7550, -84.4000), 'color': '#A71930', 'logo': 'https://a.espncdn.com/i/teamlogos/nfl/500/atl.png'},
    'Baltimore Ravens': {'coords': (39.2779, -76.6226), 'color': '#241773', 'logo': 'https://a.espncdn.com/i/teamlogos/nfl/500/bal.png'},
    'Buffalo Bills': {'coords': (42.7740, -78.7870), 'color': '#00338D', 'logo': 'https://a.espncdn.com/i/teamlogos/nfl/500/buf.png'},
    'Carolina Panthers': {'coords': (35.2258, -80.8528), 'color': '#0085CA', 'logo': 'https://a.espncdn.com/i/teamlogos/nfl/500/car.png'},
    'Chicago Bears': {'coords': (41.8623, -87.6167), 'color': '#0B162A', 'logo': 'https://a.espncdn.com/i/teamlogos/nfl/500/chi.png'},
    'Cincinnati Bengals': {'coords': (39.0955, -84.5160), 'color': '#FB4F14', 'logo': 'https://a.espncdn.com/i/teamlogos/nfl/500/cin.png'},
    'Cleveland Browns': {'coords': (41.5063, -81.6997), 'color': '#311D00', 'logo': 'https://a.espncdn.com/i/teamlogos/nfl/500/cle.png'},
    'Dallas Cowboys': {'coords': (32.7473, -97.0945), 'color': '#041E42', 'logo': 'https://a.espncdn.com/i/teamlogos/nfl/500/dal.png'},
    'Denver Broncos': {'coords': (39.7439, -105.0200), 'color': '#002244', 'logo': 'https://a.espncdn.com/i/teamlogos/nfl/500/den.png'},
    'Detroit Lions': {'coords': (42.3400, -83.0456), 'color': '#0076B6', 'logo': 'https://a.espncdn.com/i/teamlogos/nfl/500/det.png'},
    'Green Bay Packers': {'coords': (44.5013, -88.0622), 'color': '#203731', 'logo': 'https://a.espncdn.com/i/teamlogos/nfl/500/gb.png'},
    'Houston Texans': {'coords': (29.6847, -95.4107), 'color': '#03202F', 'logo': 'https://a.espncdn.com/i/teamlogos/nfl/500/hou.png'},
    'Indianapolis Colts': {'coords': (39.7601, -86.1639), 'color': '#002C5F', 'logo': 'https://a.espncdn.com/i/teamlogos/nfl/500/ind.png'},
    'Jacksonville Jaguars': {'coords': (30.3239, -81.6372), 'color': '#006778', 'logo': 'https://a.espncdn.com/i/teamlogos/nfl/500/jax.png'},
    'Kansas City Chiefs': {'coords': (39.0489, -94.4839), 'color': '#E31837', 'logo': 'https://a.espncdn.com/i/teamlogos/nfl/500/kc.png'},
    'Las Vegas Raiders': {'coords': (36.0908, -115.1836), 'color': '#000000', 'logo': 'https://a.espncdn.com/i/teamlogos/nfl/500/lv.png'},
    'Los Angeles Chargers': {'coords': (33.9534, -118.3387), 'color': '#0080C6', 'logo': 'https://a.espncdn.com/i/teamlogos/nfl/500/lac.png'},
    'Los Angeles Rams': {'coords': (34.0141, -118.2879), 'color': '#003594', 'logo': 'https://a.espncdn.com/i/teamlogos/nfl/500/lar.png'},
    'Miami Dolphins': {'coords': (25.9580, -80.2389), 'color': '#008E97', 'logo': 'https://a.espncdn.com/i/teamlogos/nfl/500/mia.png'},
    'Minnesota Vikings': {'coords': (44.9740, -93.2581), 'color': '#4F2683', 'logo': 'https://a.espncdn.com/i/teamlogos/nfl/500/min.png'},
    'New England Patriots': {'coords': (42.0909, -71.2643), 'color': '#002244', 'logo': 'https://a.espncdn.com/i/teamlogos/nfl/500/ne.png'},
    'New Orleans Saints': {'coords': (29.9508, -90.0751), 'color': '#D3BC8D', 'logo': 'https://a.espncdn.com/i/teamlogos/nfl/500/no.png'},
    'New York Giants': {'coords': (40.8136, -74.0746), 'color': '#0B2265', 'logo': 'https://a.espncdn.com/i/teamlogos/nfl/500/nyg.png'},
    'New York Jets': {'coords': (40.8136, -74.0746), 'color': '#125740', 'logo': 'https://a.espncdn.com/i/teamlogos/nfl/500/nyj.png'},
    'Philadelphia Eagles': {'coords': (39.9008, -75.1675), 'color': '#004C54', 'logo': 'https://a.espncdn.com/i/teamlogos/nfl/500/phi.png'},
    'Pittsburgh Steelers': {'coords': (40.4468, -80.0158), 'color': '#FFB612', 'logo': 'https://a.espncdn.com/i/teamlogos/nfl/500/pit.png'},
    'San Francisco 49ers': {'coords': (37.4033, -121.9694), 'color': '#AA0000', 'logo': 'https://a.espncdn.com/i/teamlogos/nfl/500/sf.png'},
    'Seattle Seahawks': {'coords': (47.5952, -122.3316), 'color': '#002244', 'logo': 'https://a.espncdn.com/i/teamlogos/nfl/500/sea.png'},
    'Tampa Bay Buccaneers': {'coords': (27.9759, -82.5033), 'color': '#D50A0A', 'logo': 'https://a.espncdn.com/i/teamlogos/nfl/500/tb.png'},
    'Tennessee Titans': {'coords': (36.1665, -86.7713), 'color': '#0C2340', 'logo': 'https://a.espncdn.com/i/teamlogos/nfl/500/ten.png'},
    'Washington Commanders': {'coords': (38.9076, -76.8644), 'color': '#773141', 'logo': 'https://a.espncdn.com/i/teamlogos/nfl/500/wsh.png'}
}

# State to team mapping (simplified for demonstration)
state_teams = {
    'AZ': ['Arizona Cardinals'],
    'GA': ['Atlanta Falcons'],
    'MD': ['Baltimore Ravens'],
    'NY': ['Buffalo Bills', 'New York Giants', 'New York Jets'],
    'NC': ['Carolina Panthers'],
    'IL': ['Chicago Bears'],
    'OH': ['Cincinnati Bengals', 'Cleveland Browns'],
    'TX': ['Dallas Cowboys', 'Houston Texans'],
    'CO': ['Denver Broncos'],
    'MI': ['Detroit Lions'],
    'WI': ['Green Bay Packers'],
    'IN': ['Indianapolis Colts'],
    'FL': ['Jacksonville Jaguars', 'Miami Dolphins', 'Tampa Bay Buccaneers'],
    'MO': ['Kansas City Chiefs'],
    'NV': ['Las Vegas Raiders'],
    'CA': ['Los Angeles Chargers', 'Los Angeles Rams', 'San Francisco 49ers'],
    'MN': ['Minnesota Vikings'],
    'MA': ['New England Patriots'],
    'LA': ['New Orleans Saints'],
    'PA': ['Philadelphia Eagles', 'Pittsburgh Steelers'],
    'WA': ['Seattle Seahawks'],
    'TN': ['Tennessee Titans'],
    'DC': ['Washington Commanders']
}

def get_coordinates(address):
    geolocator = Nominatim(user_agent="big4_map")
    location = geolocator.geocode(address)
    if location:
        return (location.latitude, location.longitude)
    return None

def find_nearest_team(user_location):
    min_distance = float('inf')
    nearest_teams = []
    
    for team, data in nfl_teams.items():
        distance = geodesic(user_location, data['coords']).miles
        if distance < min_distance:
            min_distance = distance
            nearest_teams = [team]
        elif distance == min_distance:
            nearest_teams.append(team)
    
    return nearest_teams, min_distance

def create_state_map(nearest_teams=None, league="NFL"):
    # Create a map centered on the US with zoom controls disabled
    m = folium.Map(
        location=[39.8283, -98.5795], 
        zoom_start=4,
        zoom_control=False,
        scrollWheelZoom=False,
        dragging=False
    )
    
    # Create a grid of polygons covering the US
    grid_size = 0.5  # Smaller grid size for smoother coloring
    grid_polygons = []
    
    # Create a single polygon representing the entire US
    us_polygon = []
    for feature in state_boundaries['features']:
        if feature['geometry']['type'] == 'Polygon':
            us_polygon.extend(feature['geometry']['coordinates'][0])
        elif feature['geometry']['type'] == 'MultiPolygon':
            for polygon in feature['geometry']['coordinates']:
                us_polygon.extend(polygon[0])
    
    def point_in_us(point):
        # Simple point-in-polygon check
        x, y = point[1], point[0]  # lon, lat
        inside = False
        n = len(us_polygon)
        p1x, p1y = us_polygon[0]
        for i in range(1, n + 1):
            p2x, p2y = us_polygon[i % n]
            if y > min(p1y, p2y):
                if y <= max(p1y, p2y):
                    if x <= max(p1x, p2x):
                        if p1y != p2y:
                            xinters = (y - p1y) * (p2x - p1x) / (p2y - p1y) + p1x
                        if p1x == p2x or x <= xinters:
                            inside = not inside
            p1x, p1y = p2x, p2y
        return inside
    
    # Create grid polygons
    for lat in range(25, 50, 1):
        for lon in range(-125, -65, 1):
            # Create a small square polygon
            polygon = [
                [lat, lon],
                [lat, lon + grid_size],
                [lat + grid_size, lon + grid_size],
                [lat + grid_size, lon],
                [lat, lon]
            ]
            
            # Check if the center of the polygon is in the US
            center = (lat + grid_size/2, lon + grid_size/2)
            if point_in_us(center):
                grid_polygons.append(polygon)
    
    # For each grid polygon, find the nearest team and color it
    for polygon in grid_polygons:
        # Find the center of the polygon
        center_lat = (polygon[0][0] + polygon[2][0]) / 2
        center_lon = (polygon[0][1] + polygon[2][1]) / 2
        center = (center_lat, center_lon)
        
        # Find nearest team
        nearest_team = None
        min_distance = float('inf')
        for team, team_info in nfl_teams.items():
            distance = geodesic(center, team_info['coords']).miles
            if distance < min_distance:
                min_distance = distance
                nearest_team = team
        
        if nearest_team:
            team_info = nfl_teams[nearest_team]
            # Create a colored polygon
            folium.Polygon(
                locations=polygon,
                color=team_info['color'],
                fill=True,
                fill_color=team_info['color'],
                fill_opacity=0.7,
                weight=0
            ).add_to(m)
    
    # Add state boundaries with bold lines
    for feature in state_boundaries['features']:
        folium.GeoJson(
            feature,
            style_function=lambda x: {
                'fillColor': 'transparent',
                'color': 'black',
                'weight': 3,  # Bold state boundaries
                'fillOpacity': 0
            }
        ).add_to(m)
    
    # Add team markers with logos
    for team, team_info in nfl_teams.items():
        logo_url = team_info['logo']
        response = requests.get(logo_url)
        img = Image.open(BytesIO(response.content))
        img = img.resize((30, 30))
        img.save('temp_logo.png')
        icon = folium.CustomIcon('temp_logo.png', icon_size=(30, 30))
        
        folium.Marker(
            location=team_info['coords'],
            popup=team,
            icon=icon
        ).add_to(m)
    
    return m

# Add state name to code mapping
state_name_to_code = {
    'Alabama': 'AL',
    'Alaska': 'AK',
    'Arizona': 'AZ',
    'Arkansas': 'AR',
    'California': 'CA',
    'Colorado': 'CO',
    'Connecticut': 'CT',
    'Delaware': 'DE',
    'Florida': 'FL',
    'Georgia': 'GA',
    'Hawaii': 'HI',
    'Idaho': 'ID',
    'Illinois': 'IL',
    'Indiana': 'IN',
    'Iowa': 'IA',
    'Kansas': 'KS',
    'Kentucky': 'KY',
    'Louisiana': 'LA',
    'Maine': 'ME',
    'Maryland': 'MD',
    'Massachusetts': 'MA',
    'Michigan': 'MI',
    'Minnesota': 'MN',
    'Mississippi': 'MS',
    'Missouri': 'MO',
    'Montana': 'MT',
    'Nebraska': 'NE',
    'Nevada': 'NV',
    'New Hampshire': 'NH',
    'New Jersey': 'NJ',
    'New Mexico': 'NM',
    'New York': 'NY',
    'North Carolina': 'NC',
    'North Dakota': 'ND',
    'Ohio': 'OH',
    'Oklahoma': 'OK',
    'Oregon': 'OR',
    'Pennsylvania': 'PA',
    'Rhode Island': 'RI',
    'South Carolina': 'SC',
    'South Dakota': 'SD',
    'Tennessee': 'TN',
    'Texas': 'TX',
    'Utah': 'UT',
    'Vermont': 'VT',
    'Virginia': 'VA',
    'Washington': 'WA',
    'West Virginia': 'WV',
    'Wisconsin': 'WI',
    'Wyoming': 'WY',
    'District of Columbia': 'DC'
}

st.title("Big 4 Map - NFL Teams")
st.write("Find your nearest NFL team!")

# League selection dropdown
league = st.selectbox("Major League:", ["NFL"])

# Display the default map
m = create_state_map()
folium_static(m)

address = st.text_input("Address:", placeholder="Enter an address (e.g., 9510 Grove Hill Drive, Charlotte, NC or just Charlotte)")

if address:
    user_location = get_coordinates(address)
    if user_location:
        nearest_teams, distance = find_nearest_team(user_location)
        if len(nearest_teams) > 1:
            st.success(f"The nearest NFL teams are the {'/'.join(nearest_teams)}, approximately {distance:.1f} miles away.")
        else:
            st.success(f"The nearest NFL team is the {nearest_teams[0]}, approximately {distance:.1f} miles away.")
        
        # Create and display map with user location
        m = create_state_map(nearest_teams, league)
        folium.Marker(
            location=user_location,
            popup="Your Location",
            icon=folium.Icon(color='red', icon='info-sign')
        ).add_to(m)
        folium_static(m)
    else:
        st.error("Could not find the address. Please try a different address.") 