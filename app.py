import streamlit as st
import pandas as pd
import numpy as np
from geopy.geocoders import Nominatim
from geopy.distance import geodesic
import folium
from streamlit_folium import folium_static

# NFL team locations (latitude, longitude)
nfl_teams = {
    'Arizona Cardinals': (33.5277, -112.2626),
    'Atlanta Falcons': (33.7550, -84.4000),
    'Baltimore Ravens': (39.2779, -76.6226),
    'Buffalo Bills': (42.7740, -78.7870),
    'Carolina Panthers': (35.2258, -80.8528),
    'Chicago Bears': (41.8623, -87.6167),
    'Cincinnati Bengals': (39.0955, -84.5160),
    'Cleveland Browns': (41.5063, -81.6997),
    'Dallas Cowboys': (32.7473, -97.0945),
    'Denver Broncos': (39.7439, -105.0200),
    'Detroit Lions': (42.3400, -83.0456),
    'Green Bay Packers': (44.5013, -88.0622),
    'Houston Texans': (29.6847, -95.4107),
    'Indianapolis Colts': (39.7601, -86.1639),
    'Jacksonville Jaguars': (30.3239, -81.6372),
    'Kansas City Chiefs': (39.0489, -94.4839),
    'Las Vegas Raiders': (36.0908, -115.1836),
    'Los Angeles Chargers': (33.9534, -118.3387),
    'Los Angeles Rams': (34.0141, -118.2879),
    'Miami Dolphins': (25.9580, -80.2389),
    'Minnesota Vikings': (44.9740, -93.2581),
    'New England Patriots': (42.0909, -71.2643),
    'New Orleans Saints': (29.9508, -90.0751),
    'New York Giants': (40.8136, -74.0746),
    'New York Jets': (40.8136, -74.0746),
    'Philadelphia Eagles': (39.9008, -75.1675),
    'Pittsburgh Steelers': (40.4468, -80.0158),
    'San Francisco 49ers': (37.4033, -121.9694),
    'Seattle Seahawks': (47.5952, -122.3316),
    'Tampa Bay Buccaneers': (27.9759, -82.5033),
    'Tennessee Titans': (36.1665, -86.7713),
    'Washington Commanders': (38.9076, -76.8644)
}

def get_coordinates(address):
    geolocator = Nominatim(user_agent="big4_map")
    location = geolocator.geocode(address)
    if location:
        return (location.latitude, location.longitude)
    return None

def find_nearest_team(user_location):
    min_distance = float('inf')
    nearest_team = None
    
    for team, coords in nfl_teams.items():
        distance = geodesic(user_location, coords).miles
        if distance < min_distance:
            min_distance = distance
            nearest_team = team
    
    return nearest_team, min_distance

def create_map(user_location, nearest_team):
    m = folium.Map(location=user_location, zoom_start=5)
    
    # Add user location marker
    folium.Marker(
        location=user_location,
        popup="Your Location",
        icon=folium.Icon(color='red', icon='info-sign')
    ).add_to(m)
    
    # Add nearest team marker
    team_coords = nfl_teams[nearest_team]
    folium.Marker(
        location=team_coords,
        popup=nearest_team,
        icon=folium.Icon(color='blue', icon='info-sign')
    ).add_to(m)
    
    # Add line between points
    folium.PolyLine(
        locations=[user_location, team_coords],
        color='red',
        weight=2
    ).add_to(m)
    
    return m

st.title("Big 4 Map - NFL Teams")
st.write("Find your nearest NFL team!")

address = st.text_input("Address:", placeholder="Enter an address (e.g., 9510 Grove Hill Drive, Charlotte, NC or just Charlotte)")

if address:
    user_location = get_coordinates(address)
    if user_location:
        nearest_team, distance = find_nearest_team(user_location)
        st.success(f"The nearest NFL team is the {nearest_team}, approximately {distance:.1f} miles away.")
        
        # Create and display map
        m = create_map(user_location, nearest_team)
        folium_static(m)
    else:
        st.error("Could not find the address. Please try a different address.") 