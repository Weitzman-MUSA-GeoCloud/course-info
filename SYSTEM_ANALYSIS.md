## System Analysis Template

When analyzing a system, use the following structure to guide your breakdown:

### 1. User Goal & Interface
*   **Main User Goal**: What is the primary thing the user wants to achieve? (e.g., "Find out if I need an umbrella")
*   **Key Interface Components**: What UI elements facilitate this? (e.g., Address search bar, "Current Location" button, Map view, list of upcoming days)

### 2. Data Structure & Sources
*   **Primary Data Entities**: What are the core "nouns" in the system? (e.g., A "Location", a "Forecast Snapshot", a "Sensor Reading")
*   **Data Sources**: Where does the data originate? (e.g., NOAA satellites, user-submitted reports, municipal database)
*   **Data Type/Characteristics**:
    *   **Temporal**: Real-time? Historical? Daily snapshot?
    *   **Spatial**: Point? Polygon? Raster grid?
    *   **Volume**: Megabytes? Petabytes?

### 3. Data Processing & Storage
*   **Storage Strategy**: How is the data likely stored for quick access? (e.g., PostGIS database, Raster tile cache, Time-series database)
*   **Transformations**: What happens to the raw data before the user sees it? (e.g., Aggregating sensor readings into a grid, snapping GPS points to a road network, training a model to predict future values)
*   **Access Pattern**: How does the frontend get the data? (e.g., REST API request for a specific lat/lon, WebSocket stream of updates)

## Additional System Considerations

*   **Latency vs. Freshness**: Does the user need sub-second real-time data (Uber car location) or is yesterday's data fine (Property tax assessment)?
*   **Scale**: How many concurrent users? How much data is being ingested per second?
*   **Privacy & Security**: Does the system handle sensitive user location data? How is it protected?
*   **Resiliency**: What happens if a sensor goes offline or an API call fails? Does the app degrade gracefully?
