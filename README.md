# Gate-on-Score GitHub Action

## How to Add to Your Workflow

### Sample Workflow File

Create a `.github/workflows/main.yml` file in your repository and add the following content:

```yaml
name: Sample Workflow
on:
  push:
    branches:
      - main

jobs:
  check-score:
    runs-on: ubuntu-latest
    steps:
    - name: Checkout code
      uses: actions/checkout@v2

    - name: Set up Node.js
      uses: actions/setup-node@v2
      with:
        node-version: '14'

    - name: Install Dependencies
      run: npm install

    - name: Gate-on-Score
      uses: gremlin/gate-on-score@v1
      with:
        gremlin_team_id: ${{ secrets.GREMLIN_TEAM_ID }}
        api_key: ${{ secrets.API_KEY }}
        threshold: 50  # Replace 50 with your desired threshold

    - name: Continue with Workflow
      run: echo "Continuing with workflow as score is above threshold.
```"
