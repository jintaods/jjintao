$ErrorActionPreference = 'Stop'
$outDir = "c:\Users\user\WorkBuddy\20260412201908\jingtao-website\assets"

$files = @(
  @{url="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"; name="news-team-meeting.jpg"},
  @{url="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"; name="news-strategy.jpg"},
  @{url="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80"; name="news-boardroom.jpg"},
  @{url="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80"; name="news-woman-business.jpg"},
  @{url="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80"; name="news-analysis.jpg"},
  @{url="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80"; name="news-office.jpg"},
  @{url="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"; name="news-collaboration.jpg"},
  @{url="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"; name="news-creative.jpg"},
  @{url="https://images.unsplash.com/photo-1560472355-536de3962603?w=800&q=80"; name="services-marketing.jpg"},
  @{url="https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&q=80"; name="hero-founder.jpg"},
  @{url="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80"; name="hero-business-man.jpg"}
)

foreach ($f in $files) {
  $path = Join-Path $outDir $f.name
  try {
    Invoke-WebRequest -Uri $f.url -OutFile $path -TimeoutSec 20
    Write-Host "OK:" $f.name
  } catch {
    Write-Host "FAIL:" $f.name "-" $_
  }
}
