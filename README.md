# CyberT33N Ebay Scrap Bot
This bot scraps all items of any search link by visiting all pages and exporting all item links. After this it will open each item link and scrap the needed informations. 
<br />
<br />
Database: **MongoDB**
<br />
Webdriver: **Puppeteer**
<br />
Bot Protection: **False**
<br />
Sign-in required: **False**
<br />
Language: **Multilanguage (currently only tested for EN and DE)**
<br />
[CyberT33N Scrap Bot - Core Engine](https://github.com/CyberT33N/scrapcore-mongodb-puppeteer)

<br />
<br />

![alt tag](https://i.imgur.com/UANKCkB.jpg)
![alt tag](https://i.imgur.com/o7LRLpF.jpg)
![alt tag](https://i.imgur.com/DVm28Jq.jpg)

 _____________________________________________________
 _____________________________________________________


<br />
<br />

# *Dependencies*

In order to run this bot you must download the [CyberT33n Core Engine](https://github.com/CyberT33N/scrapcore-mongodb-puppeteer). It will contain all needed dependencies and useful scripts for easy usage of this Bot!
<br />
<br />
After you have downloaded the CyberT33n Core Engine, download all files from this repository and **insert them with folders inside of the root directory** of your CyberT33n Core Engine where you can find:
```bash
BOT - Start.sh
```

<br />
<br />


 _____________________________________________________
 _____________________________________________________


<br />
<br />


# *Install*
Run this script for creating your **Database & import Collection** at your MongoDB Server:
```bash
MongoDB - Import DB.bat / .sh
```

For default we use localhost MongoDB Server which is already set at your **config.json** file. So you don´t have to change anything in this case.


<br /><br />Your import collection contains all search URLS like as example:<br />
- https://www.ebay.de/sch/i.html?_from=R40&_nkw=metall+bett&_sacat=0&LH_TitleDesc=0&Farbe=Schwarz&rt=nc&Liegefl%25C3%25A4che=Doppelbett&_dcat=175758


<br /><br />Import a list of search URLS to your import collection and make sure they are flagged as **used=0**
<br />That´s it! Now run your bot with:
```bash
BOT - Start.bat / .sh
```

<br />
<br />


 _____________________________________________________
 _____________________________________________________


<br />
<br />

# *Sample Export*
```javascript
[{
	"_id": {
		"$oid": "5f122d45cc6f126f8085da37"
	},
	"url": "https://www.ebay.de/itm/Ars-Natura-JillWOOD-Massivholzbettgestell-140-X-200/283926248998?hash=item421b52be26%3Ag%3AjdEAAOSwG9Ze9EyC&LH_ItemCondition=3000%7C1000",
	"auctionactive": "Dieses Angebot wurde vom Verkäufer beendet, da der Artikel nicht mehr verfügbar ist.",
	"title": "Ars Natura JillWOOD Massivholzbettgestell 140 X 200",
	"price": "EUR 150,00",
	"paymentmethod_paypal": true,
	"paymentmethod_direct_debit": true,
	"ebay_buyerprotection": true,
	"ebay_articleID": "283926248998",
	"descriptioniframe_url": "https://vi.vipr.ebaydesc.com/ws/eBayISAPI.dll?ViewItemDescV4&item=283926248998&t=0&category=175758&seller=zibbeli&excSoj=1&excTrk=1&lsite=77&ittenable=false&domain=ebay.de&descgauge=1&cspheader=1&oneClk=2&secureDesc=1",
	"imageURLS": [],
	"table_artikelzustand": "Gebraucht: Artikel wurde bereits benutzt. Ein Artikel mit Abnutzungsspuren, aber in gutem Zustand und vollkommen funktionsfähig. Bei dem Artikel handelt es sich unter Umständen um ein Vorführmodell oder um einen Artikel, der an den Verkäufer nach Gebrauch zurückgegeben wurde. Weitere Einzelheiten, z. B. genaue Beschreibung etwaiger Fehler oder Mängel im Angebot des Verkäufers. Alle Zustandsdefinitionen aufrufen– wird in neuem Fenster oder Tab geöffnet ... Mehr zum Thema Zustand",
	"table_montageerforderlich": "Ja",
	"table_farbe": "Holz",
	"table_marke": "Ars Natura",
	"table_finish": "Geölt",
	"table_modell": "JillWOOD",
	"table_liegefläche": "Doppelbett",
	"table_produktart": "Bettgestell",
	"table_matratzeinklusive": "Nein",
	"table_material": "Massivholz",
	"table_zusätzlichbenötigteteile": "Nein"
},
{
	"_id": {
		"$oid": "5f122d49cc6f126f8085da38"
	},
	"url": "https://www.ebay.de/itm/Massivholz-Bett-140x200-Holzbett-Birke-natur-geolt-Kopfteil-Einzelbett-Gestell/352826627670",
	"auctionactive": true,
	"title": "Massivholz Bett 140x200 Holzbett Birke natur geölt Kopfteil Einzelbett Gestell",
	"price": "EUR 345,00",
	"seller_feedback_percent": "99,4% Positive Bewertungen",
	"seller_status": "Angemeldet als gewerblicher Verkäufer",
	"instock": "3 verfügbar",
	"shipping_cost": "KOSTENLOS",
	"shiptolocation": "Europäische Union | Ausschlussliste anzeigen",
	"item_location": "Ebersbach an der Fils, Deutschland",
	"paymentmethod_paypal": true,
	"paymentmethod_direct_debit": true,
	"paymentmethod_other": "Barzahlung bei Abholung",
	"ebay_buyerprotection": true,
	"ebay_articleID": "352826627670",
	"descriptioniframe_url": "https://vi.vipr.ebaydesc.com/ws/eBayISAPI.dll?ViewItemDescV4&item=352826627670&t=1584005013000&tid=7710&category=175758&seller=coemico&excSoj=1&excTrk=1&lsite=77&ittenable=false&domain=ebay.de&descgauge=1&cspheader=1&oneClk=2&secureDesc=1",
	"imageURLS": [
		"https://i.ebayimg.com/images/g/1uEAAOSwlTBdqZVH/s-l9999.jpg",
		"https://i.ebayimg.com/images/g/jukAAOSwXI1dqZVI/s-l9999.jpg"
	],
	"table_artikelzustand": "Neu: Neuer, unbenutzter und unbeschädigter Artikel in nicht geöffneter Originalverpackung (soweit eine Verpackung vorhanden ist). Die Verpackung sollte der im Einzelhandel entsprechen. Ausnahme: Der Artikel war ursprünglich in einer Nichteinzelhandelsverpackung verpackt, z. B. unbedruckter Karton oder Plastikhülle. Weitere Einzelheiten im Angebot des Verkäufers. Alle Zustandsdefinitionen aufrufen– wird in neuem Fenster oder Tab geöffnet ... Mehr zum Thema Zustand",
	"table_bettkantenhöhe": "37 cm",
	"table_stil": "Landhaus",
	"table_futeilhöhe": "37 cm",
	"table_form": "Rechteckig",
	"table_besonderheiten": "Mit Kopfteil, Zum Zusammenbauen",
	"table_liegefläche": "Doppelbett, Einzelbett, Französisches Bett",
	"table_marke": "Coemo",
	"table_höhe": "37 cm",
	"table_montageerforderlich": "Ja",
	"table_mae": "140cm x 200cm",
	"table_breite": "140 cm",
	"table_zimmer": "Jugendzimmer",
	"table_material": "Birke",
	"table_produktart": "Klassisches Bettgestell",
	"table_herstellernummer": "nicht zutreffend",
	"table_länge": "200 cm",
	"table_zusätzlichbenötigteteile": "Nein",
	"table_farbe": "Natur",
	"table_abteilung": "Erwachsene"
}]
```
