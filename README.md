# Neptune DXP Open Edition – End-to-End Testing Challenge

This repository contains the solution for the Neptune DXP Open Edition technical challenge.
The goal of the challenge is to demonstrate a high-quality, repeatable end-to-end testing process
covering both successful and failure scenarios.

---

## Overview

The solution consists of:
- A small Neptune DXP application for searching items
- A REST API implemented using Neptune API Designer and Server Scripts
- End-to-end automated tests written with Playwright

The focus of the implementation is not UI complexity, but reliable end-to-end validation of
application behavior.

---

## Application & Backend

### Neptune Development Package
All Neptune artifacts are grouped in a Development Package named:

**`neptune-challenge`**

It contains:
- **App**: `myappdemo`
- **API**: `items-search-api`
- **Server Script**: `SearchItems`

The application allows users to:
- Search for items
- View matching results
- Handle empty search results
- Handle API failures gracefully

---

## End-to-End Test Scenarios

The Playwright test suite validates the application end-to-end using a locally running
Neptune DXP Open Edition instance.

### Covered Scenarios

1. **Successful search (happy path)**
   - User searches for a valid item
   - Matching results are displayed in the list

2. **Empty search results**
   - User searches for a non-existing item
   - The UI displays a clear “No results found” message

3. **API failure handling**
   - A controlled API failure is triggered
   - The API returns HTTP 500
   - The UI hides the results list and displays a user-friendly error message

These scenarios together validate the main user flow, edge cases, and error handling behavior.

---

## Deterministic API Failure Trigger

For testing purposes, the API includes a deterministic failure trigger.

- When the search input equals **`error`**
- The server script throws an exception
- The API responds with **HTTP 500**

This approach ensures that API failure scenarios are reproducible and suitable for automated
end-to-end testing.

---

## Requirements

- Node.js (>= 18)
- npm
- Neptune DXP Open Edition running locally

---

## How to Run

### 1. Start Neptune DXP

Ensure Neptune DXP Open Edition is running locally:

http://localhost:8080

---

### 2. Install dependencies

```bash
npm install
```
---

### 3. Configure environment variables

Create a `.env` file in the root of the project:

```env
NEPTUNE_USER=your-username
NEPTUNE_PASSWORD=your-password
```
---

---

### 4. Run tests

```bash
npx playwright test
````

---

### 5. Open HTML report

```bash
npx playwright show-report
```

----

## Notes

- The `.env` file and Playwright authentication state (`.auth/state.json`) are not committed for security reasons.
This ensures sensitive data is not exposed and follows best practices for test automation projects.
