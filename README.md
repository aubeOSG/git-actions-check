# Git Actions Check

Testing out automatic actions to make deploying an electron app easier.

The ideal workflow would be:

- Raw builds on `closed` PRs to `main` - [done](./.github/workflows/build.yml)
- Latest/Unstable/Beta distributables releases - [done](./.github/workflows/prerelease.yml)
- Publish a stable release of distributables - [WIP](./.github/workflows/release.yml)
