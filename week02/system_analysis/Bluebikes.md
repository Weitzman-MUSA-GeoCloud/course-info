# Suggest-a-Station: System Analysis

**Duration**: ~30 Minutes  
**Goal**: Build intuition about data collection systems by tracing data flow through a real geospatial application.  
**Tool**: [Bluebikes Suggest-a-Station](https://bluebikes.com/suggest-a-station)

---

## Step 1: Explore the Tool

Open the Bluebikes station suggestion map. Click on a location where you'd want a new station and walk through the submission form (you don't have to actually submit).

**While exploring, notice**:
*   What information does the form ask *you* to provide?
*   What information does the map show *you* about that location?

---

## Step 2: Trace the Data Flow

**Individual reflection**: Pick one piece of data you provide when you submit (e.g., the location you clicked, the checkbox you selected). Where does that data show up in the interface *for someone else* viewing the map later?

**Discuss with your table**:
*   **Checkboxes** ("Close to my home", etc.) — Where do these appear for other users?
*   **Your map click** (the lat/lon) — How does it contribute to what others see on the map?
*   **The "15 other people suggested..." message** — What data makes this possible?

---

## Step 3: Diagram the System

As a table, sketch a simple system diagram. Trace a single suggestion from the moment you click "Submit" to the moment it appears on someone else's map.

**Think about**:
*   Where does the data go after you click Submit?
*   Where is it stored?
*   What might its structure (tables, fields) look like?
*   How does it get back out to the map for other users?

**Bonus**: The form has a "Tell us more" free-text field. Why might that data *not* appear in the public interface, even though it's collected?

---

## Step 4: Discussion

Be ready to share one insight from your table about:
*   How data flows through this system
*   What decisions were made about what data to show publicly vs. keep private
