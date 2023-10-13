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
    - name: Gate-on-Score
      uses: gremlin/gate-on-score@v1
      with:
        gremlin_team_id: ${{ secrets.GREMLIN_TEAM_ID }}
        api_key: ${{ secrets.API_KEY }}
        threshold: 50  # Replace 50 with your desired threshold
```
