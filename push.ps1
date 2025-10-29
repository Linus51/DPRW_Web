param([string]$RepoUrl = "https://github.com/Linus51/dprw.git")
if (-not $RepoUrl) { $RepoUrl = Read-Host "Repo URL" }
git remote remove origin 2>$null
git remote add origin $RepoUrl
git fetch origin 2>$null
git branch -M main
git push -u origin main
