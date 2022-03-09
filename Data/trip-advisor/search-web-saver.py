from lib2to3.pgen2 import driver
from selenium import webdriver
import codecs

driver = webdriver.Chrome(executable_path='C:/Users/amidi/Documents/MyWorkSpace/WebScraper/chromedriver_win32/chromedriver.exe')
#driver = webdriver.Chrome(executable_path='C:/Users/amidi/Documents/MyWorkSpace/WebScraper/firefox driver/geckodriver.exe')


for i in range(34):
    href = "https://www.tripadvisor.jp/Search?q=%E8%8A%B1%E8%A6%8B&searchSessionId=AAEFDFBBF5A38EC7FBF8FDEFAACCC4E11646590809001ssid&sid=D8BCBB166DAB4DD5BD84CE5CF24E96511646590810068&blockRedirect=true&rf=9&ssrc=m&o="
    href = href + str(i * 30)
    
    driver.implicitly_wait(10)
    driver.get(href)
    driver.find_element_by_class_name("location-meta-block")


    path = "C:/Users/amidi/Documents/MyWorkSpace/WebScraper/sourses/page" + str(i + 1) + ".html"
    
    f = codecs.open(path, "w", "utf−8")
    h = driver.page_source
    f.write(h)
    


driver.quit()