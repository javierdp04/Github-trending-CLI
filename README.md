# CLI to get GitHub trending repos

Command-line interface to get GitHub trending repositories.
This project idea is from [roadmap.sh](https://roadmap.sh/projects/github-trending-cli).

## Features

- Get the N (max n == 100) most popular GitHub repos and show some info about them.
- Filter repositories by: day, week or year.
- Sort repos by the numer of GitHub stars.

## Quick-start

### 1. Installation

1. Clone the repo:
```bash
   git clone https://github.com/javierdp04/Github-trending-CLI.git cli-app
```
2. Install dependencies:
```bash
   cd cli-app
   npm install
```

### 2. Run

```bash
node list --duration opt1 --limit opt2
```

### Options

| Option     | Description                        | Default |
|------------|-------------------------------------|---------|
| --duration | Time range: day, week, month, year | week    |
| --limit    | Number of repositories to display  | 10      |