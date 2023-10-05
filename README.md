# Gate-on-Score GitHub Action

## How to Add to Your Workflow

1. Add the action to your GitHub Actions workflow YAML file:
  ```yaml
  - name: Gate-on-Score
    uses: gremlin/gate-on-score@v1
    with:
      gremlin_team_id: ${{ secrets.GREMLIN_TEAM_ID }}
      api_key: ${{ secrets.API_KEY }}
      threshold: 50

