from lib2to3.pgen2 import driver
from selenium import webdriver
import pandas as pd
from bs4 import BeautifulSoup
import codecs



df = pd.read_csv('C:/Users/amidi/Documents/MyWorkSpace/WebScraper/overview.csv')

href_list = df['href'].to_list()
href_list_jp = href_list.copy()
href_list_en = href_list.copy()

# for href_jp in href_list_jp:
#     href_jp = href_jp.replace('Reviews', 'Reivew-or')
#     href_jp = href_jp[0]

driver = webdriver.Chrome(executable_path='C:/Users/amidi/Documents/MyWorkSpace/WebScraper/chromedriver_win32/chromedriver.exe')
driver.implicitly_wait(5)

results_review = []
results_date_type = []
results_rate = []
results_location_id = []
results_review_id = []

i_cap = 5
j_cap = 50

for j in range(j_cap):
    i = 0
    while True:
        
        if i != 0:
            href_split_jp = href_list_jp[j].split('Reviews')
            href_jp = href_split_jp[0] + 'Reviews-or' + str(i * 10) + href_split_jp[1]
        else:
            href_jp = href_list_jp[j]

        driver.get(href_jp)
        
        #elem1 = driver.find_elements_by_class_name('noQuotes')
        elem2 = driver.find_elements_by_class_name('eRduX')

        if len(elem2) == 0:
            print('no elem')
            break
        
        # if driver.current_url != href_jp:
        #     print('redierted')
        #     break
        
        if i > i_cap:
            print('i > cap')
            break

        path = "C:/Users/amidi/Documents/MyWorkSpace/WebScraper/sourses/location" + str(j) \
        + "-page" + str(i) + ".html"

        f = codecs.open(path, "w", "utf−8")
        h = driver.page_source
        f.write(h)

        soup = BeautifulSoup(h, 'html.parser')
        k = 0 
        for block in soup.find_all("div", class_="ffbzW _c"):
            results_review.append('')
            results_date_type.append('')
            results_rate.append('')
            
            review = ""            
            date_type = ""
            rate = ""

            review = block.find('span',class_='NejBf').text
            date_type = block.find('div',class_='eRduX').text
            rate = block.find('svg', class_='RWYkj d H0').get('title')
            
            if len(review) != 0:
                results_review[len(results_review) - 1] = review

            if len(date_type) != 0:
                results_date_type[len(results_date_type) - 1] = date_type

            if len(rate) != 0:
                results_rate[len(results_rate) - 1] = rate

            results_review_id.append(i * 10 + k)
            results_location_id.append(j)
            k = k + 1



        i = i + 1

driver.quit()    

df_results = pd.DataFrame({'results_location_id':results_location_id, 'results_review_id':results_review_id,
'results_review':results_review, 'results_date_type':results_date_type, 'results_rate':results_rate})

df_results.to_csv('C:/Users/amidi/Documents/MyWorkSpace/WebScraper/review.csv', index = False, encoding = 'utf-8')

# ###Eglish reviews
# href_en = href_list[j].replace('tripadvisor.jp','tripadvisor.com')
# href_split_en = href_en.split('Reviews')
# href_list_en = []
# href_list_en.append(href_split_en[0] + 'Reviews-or' + str(i * 10) + href_split_en[1])











# for i in range(34):
#     href = "https://www.tripadvisor.jp/Search?q=%E8%8A%B1%E8%A6%8B&searchSessionId=AAEFDFBBF5A38EC7FBF8FDEFAACCC4E11646590809001ssid&sid=D8BCBB166DAB4DD5BD84CE5CF24E96511646590810068&blockRedirect=true&rf=9&ssrc=m&o="
#     href = href + str(i * 30)
    
#     driver.implicitly_wait(10)
#     driver.get(href)
#     driver.find_element_by_class_name("location-meta-block")



#     path = "C:/Users/amidi/Documents/MyWorkSpace/WebScraper/sourses/page" + str(i + 1) + ".html"
    
#     f = codecs.open(path, "w", "utf−8")
#     h = driver.page_source
#     f.write(h)
    


# driver.quit()