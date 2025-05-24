below is the test plan to support the migration:

- there exists a sitemap with reference in the HTML
- there exists a robots.txt with reference to the sitemap
- check whether ads.txt is present in the root directory and contains `ca-pub-7183740147103241`
- check whether naveen521kk.gpg exists in the root directory
- test whether all the URLs in the sitemap are reachable with a 200 response
- check whether homepage loads with a 200 response
- check whether title of homepage is 'Naveen M K | About Me'
- Check whether the homepage contains atleast one line to my socials:
    - Email (naveen521kk at gmail.com)
    - Github (naveen521kk)
    - Twitter (naveen521kk)
    - Gitlab (naveen521kk)
    - Mastodon (fosstodon.org/naveen521kk)
    - Threads (naveen521kk)
- Check whether the freelance banner appears on the homepage and on the other pages
- Check whether the freelance banner closes when clicked close
- Check whether the freelance banner appears on the page after closing it (it shouldn't appear until after a few days). Also, check whether the cookie `hideFreelanceAd` is set
- Check whether Google Analytics is present on the homepage and on the other pages - `G-695MYTZSVL` is the ID
- Check whether Google Ads is present on the homepage and on the other pages - `ca-pub-7183740147103241` is the ID
- Check whether the homepage contains a link to the blog (/posts)
- Check whether the homepage contains a link to the projects (https://project.naveenmk.me)
- Check whether a light/dark mode toggle is present on the homepage and on the other pages
- Check whether the light/dark mode toggle works (check for the background color and text color)
- Check whether the light/dark mode toggle is persistent (check for the background color and text color)
- Check whether the logo contains the text 'Naveen M K' and link to the homepage (/)
- Check whether the logo is present on the homepage and on the other pages
- check whether the meta description exists on the homepage and on the other pages
- Check whether /posts has the title 'Blog Posts | Naveen M K'
- Check whether all the links in /posts are reachable with a 200 response
- Go through all the posts and check whether the title is present
    - Iterate through src/posts/*.{md,mdx} and check whether the title is present
    - Check for it matches the title in the HTML
    - Check whether the post contains the date correctly formatted (November 1, 2023)
    - Check whether the post contains the tags linked and added
    - Check whether the post contains the description
    - Check whether the post contains the content
    - Check the title of the content are with `id` tags
    - Check all posts contains an image
    - Check whether comments section exists
    - Check if table of contents exists
    - Check whether there are atleast 2-3 ad containers

## 🔧 Test Suite Structure

- **test_root_files.py**  
  - Validate root‐level assets:
    - HTML contains sitemap link  
    - robots.txt references sitemap  
    - ads.txt includes `ca-pub-7183740147103241`  
    - naveen521kk.gpg exists

- **test_sitemap_rss_urls.py**  
  - Fetch sitemap.xml  
  - Parse each URL and assert HTTP 200
  - Fetch rss.xml
  - Parse each URL and assert HTTP 200

- **test_homepage.py**  
  - HTTP 200 on `/`  
  - Title “Naveen M K | About Me”  
  - Social links (Email, GitHub, Twitter, GitLab, Mastodon, Threads)  
  - Freelance banner behavior & `hideFreelanceAd` cookie  
  - Google Analytics (`G-695MYTZSVL`) and Google Ads (`ca-pub-7183740147103241`)  
  - Links to `/posts` & external projects  
  - Light/dark toggle presence, functionality & persistence  
  - Logo text/link & meta description

- **test_posts_listing.py**  
  - HTTP 200 on `/posts`  
  - Title “Blog Posts | Naveen M K”  
  - All post links return HTTP 200

- **test_blog_posts.py**  
  - Iterate `src/posts/*.{md,mdx}`  
  - Match frontmatter title/date/tags/description with HTML  
  - Content presence, headings with `id` attributes  
  - Featured image, comments section, table of contents, ad containers
