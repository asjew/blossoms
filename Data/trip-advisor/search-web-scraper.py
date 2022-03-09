import pandas as pd
from bs4 import BeautifulSoup
import codecs

content_list = []



for i in range(34):
    path = "C:/Users/amidi/Documents/MyWorkSpace/WebScraper/sourses/page" + str(i + 1) + ".html"
    content_list.append(codecs.open(filename = path, encoding = "utf−8"))


results_name = []
results_href = []
results_rate = []
results_review_count = []
results_address = []

for content in content_list:

    soup = BeautifulSoup(content, 'html.parser')


    ###Parse Html
    for block in soup.find_all("div", class_="location-meta-block"):
        title = block.find("div",class_="result-title")
        name = title.text
        
        rate_parent = block.find("div", class_="prw_rup prw_common_responsive_rating_and_review_count")
        rate = rate_parent.find("span").get('class')

        review_count = rate_parent.find("a").text

        href = rate_parent.find("a").get('href')

        address = block.find("div", class_="address-text").text

        if name not in results_name:
            results_name.append(name)
            results_rate.append(rate)
            results_review_count.append(review_count)
            results_href.append(href)
            results_address.append(address)


###Save as .csv
df = pd.DataFrame({'Names': results_name,'Address': results_address, 'Rate': results_rate, 'Review Count': results_review_count,'href': results_href})
df.to_csv('C:/Users/amidi/Documents/MyWorkSpace/WebScraper/name.csv', index = False, encoding = 'utf-8')