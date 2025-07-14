# Commit Message Guide (Conventional Commits)

To keep the project history clear, readable, and enable automated release/changelog tools, please follow the commit message rules below:

## Basic Structure

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

### Examples:

- `feat: add login feature`
- `fix(auth): fix token validation bug`
- `docs: update README`
- `refactor(ui): optimize chat interface`
- `chore: update dependencies`

## Common Commit Types

| type     | Meaning                                 |
| -------- | --------------------------------------- |
| feat     | Add/change a new feature                |
| fix      | Fix a bug                               |
| docs     | Documentation changes                   |
| style    | Code style/formatting (no code change)  |
| refactor | Code refactoring (no feature/bug fix)   |
| perf     | Performance improvements                |
| test     | Add/update tests                        |
| chore    | Maintenance tasks (build, deps, config) |

## Description Rules

- Keep it short, clear, and in the imperative mood (e.g., "add", not "added" or "adds").
- Do not capitalize the first letter.
- No period at the end.
- Should not exceed 72 characters.

## Good Examples

- `feat: add user search functionality`
- `fix: resolve avatar not displaying`
- `docs: add installation instructions`
- `chore: update husky config`

## Bad Examples

- `update code`
- `Bug fix`
- `add new feature`
- `fix bug`

## More Information

- [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)
