# CyberT33N Ebay Scrap Bot
This bot scraps all items of any search link by visiting all pages and exporting all item URLS. After this it will open each item URL and scrap the needed informations. 
<br />
<br />
Database: MongoDB
<br />
Webdriver: Puppeteer
<br />
Bot Protection: False
<br />
Sign-in required: False
<br />
CyberT33N Scrap Bot - Core Engine: https://github.com/CyberT33N/scrapcore-mongodb-puppeteer


<br />
<br />


 _____________________________________________________
 _____________________________________________________


<br />
<br />

# Dependencies

In order to run this bot you must download the CyberT33n Core Engine (https://github.com/CyberT33N/scrapcore-mongodb-puppeteer). It will contain all needed dependencies and useful scripts for easy usage of this Bot!
<br />
<br />
After you have downloaded the CyberT33n Core Engine, download all files from this repository and insert them with folders inside of the root directory of your CyberT33n Core Engine where you can find:
```bash
BOT - Start.sh
```

<br />
<br />


 _____________________________________________________
 _____________________________________________________


<br />
<br />


# Install
Run this file for creating your Database and import Collection at your MongoDB Server:
```bash
MongoDB - Import DB.bat / .sh
```

<br />
<br />
For default we use localhost MongoDB which is already set at your config.json file. So you don´t have to change anything in this case.

<br />
<br />
Your import collection contains the search URLS like as example:<br />
https://www.ebay.de/sch/i.html?_from=R40&_nkw=metall+bett&_sacat=0&LH_TitleDesc=0&Farbe=Schwarz&rt=nc&Liegefl%25C3%25A4che=Doppelbett&_dcat=175758


<br />
<br />
Import any search URLS you want to your import collection and make sure they are flagged as used=0


<br /><br />That´s it! Now run your bot with:
```bash
BOT - Start.bat / .sh
```

<br />
<br />


 _____________________________________________________
 _____________________________________________________


<br />
<br />

# Sample Export

Download full file here or look below: <br />
- https://drive.google.com/file/d/10lDQ99vdUT4Co8GrMOQULzY_zTwuSo2t/view?usp=sharing

```json
[{
	"_id": {
		"$oid": "5f125768745443899c25b838"
	},
	"url": "https://www.ebay.de/itm/Bett-Metallbett-Bettgestell-Doppelbett-Bettrahmen-Lattenrost-140-x-200-schwarz/311921017285?hash=item489ff101c5:g:kmsAAOSwXNdcm4gc",
	"auctionactive": true,
	"title": "Bett Metallbett Bettgestell Doppelbett Bettrahmen Lattenrost 140 x 200 schwarz",
	"price": "EUR 89,95",
	"viewsday": "2 Mal pro Stunde aufgerufen",
	"seller_feedback_percent": "99,6% Positive Bewertungen",
	"seller_status": "Angemeldet als gewerblicher Verkäufer",
	"instock": "4 verfügbar",
	"item_selled": "590 verkauft",
	"shipping_cost": "KOSTENLOS",
	"shiptolocation": "Europa | Ausschlussliste anzeigen",
	"item_location": "Magdeburg, Deutschland",
	"paymentmethod_other": "Kreditkarte, Barzahlung bei Abholung, Überweisung, Auf Rechnung",
	"ebay_buyerprotection": true,
	"ebay_articleID": "311921017285",
	"descriptioniframe_url": "https://vi.vipr.ebaydesc.com/ws/eBayISAPI.dll?ViewItemDescV4&item=311921017285&t=1594715046000&category=175758&seller=www_homestyle4u_de&excSoj=1&excTrk=1&lsite=77&ittenable=false&domain=ebay.de&descgauge=1&cspheader=1&oneClk=2&secureDesc=1",
	"imageURLS": [
		"https://i.ebayimg.com/images/g/kmsAAOSwXNdcm4gc/s-l9999.jpg",
		"https://i.ebayimg.com/images/g/fBoAAOSwIyxcm4gd/s-l9999.jpg",
		"https://i.ebayimg.com/images/g/2F4AAOSwKWVcm4gd/s-l9999.jpg",
		"https://i.ebayimg.com/images/g/nlsAAOSwCtJcm4ge/s-l9999.jpg",
		"https://i.ebayimg.com/images/g/oi4AAOSw-R5cm4ge/s-l9999.jpg",
		"https://i.ebayimg.com/images/g/Y4wAAOSwwJpcm4ge/s-l9999.jpg",
		"https://i.ebayimg.com/images/g/N1cAAOSw-ttcm4gf/s-l9999.jpg"
	],
	"table_artikelzustand": "Neu: Neuer, unbenutzter und unbeschädigter Artikel in nicht geöffneter Originalverpackung (soweit eine Verpackung vorhanden ist). Die Verpackung sollte der im Einzelhandel entsprechen. Ausnahme: Der Artikel war ursprünglich in einer Nichteinzelhandelsverpackung verpackt, z. B. unbedruckter Karton oder Plastikhülle. Weitere Einzelheiten im Angebot des Verkäufers. Alle Zustandsdefinitionen aufrufen– wird in neuem Fenster oder Tab geöffnet ... Mehr zum Thema Zustand",
	"table_farbe": "Schwarz",
	"table_montageerforderlich": "Ja",
	"table_liegefläche": "Doppelbett",
	"table_zusätzlichbenötigteteile": "Nein",
	"table_marke": "Homestyle4u",
	"table_abteilung": "Erwachsene",
	"table_material": "Metall",
	"table_anzahlderräder": "0",
	"table_produktart": "Klassisches Bettgestell",
	"table_anzahlderschubladen": "0",
	"table_finish": "Pulverbeschichtung",
	"table_besonderheiten": "Mit Lattenrost, Montageanleitung",
	"table_herstellernummer": "1206",
	"table_bettkantenhöhe": "27 cm",
	"table_höhe": "90 cm",
	"table_breite": "145 cm",
	"table_kopfteilhöhe": "90 cm",
	"table_form": "Rechteckig",
	"table_länge": "210 cm",
	"table_gewicht": "25-40 kg",
	"table_matratzeinklusive": "Nein",
	"table_verpackung": "2 Kartons",
	"table_ean": "4251285305045"
},
{
	"_id": {
		"$oid": "5f12576b745443899c25b839"
	},
	"url": "https://www.ebay.de/itm/180x200-cm-Schlafzimmerbett-Bettgestell-Metall-Bett-Doppelbett-neu-Lattenrost/402259816533?hash=item5da88db055:g:VsEAAOSwx-9WueHT",
	"auctionactive": true,
	"title": "180x200 cm Schlafzimmerbett Bettgestell Metall Bett Doppelbett neu + Lattenrost",
	"price": "EUR 105,89",
	"seller_feedback_percent": "99,8% Positive Bewertungen",
	"seller_status": "Angemeldet als gewerblicher Verkäufer",
	"instock": "Mehr als 10 verfügbar",
	"item_selled": "49 verkauft",
	"shipping_cost": "KOSTENLOS",
	"shiptolocation": "Weltweit | Ausschlussliste anzeigen",
	"item_location": "Igersheim, Deutschland",
	"paymentmethod_other": "Kreditkarte, Überweisung",
	"ebay_buyerprotection": true,
	"ebay_articleID": "402259816533",
	"descriptioniframe_url": "https://vi.vipr.ebaydesc.com/ws/eBayISAPI.dll?ViewItemDescV4&item=402259816533&t=1594978603000&category=175758&seller=tectake_deutschland&excSoj=1&excTrk=1&lsite=77&ittenable=false&domain=ebay.de&descgauge=1&cspheader=1&oneClk=2&secureDesc=1",
	"imageURLS": [
		"https://i.ebayimg.com/images/g/VsEAAOSwx-9WueHT/s-l9999.jpg",
		"https://i.ebayimg.com/images/g/xXAAAOSwll1WvEYW/s-l9999.jpg",
		"https://i.ebayimg.com/images/g/aiwAAOSwPc9WueHV/s-l9999.jpg",
		"https://i.ebayimg.com/images/g/GggAAOSwB4NWueHW/s-l9999.jpg"
	],
	"table_artikelzustand": "Neu: Neuer, unbenutzter und unbeschädigter Artikel in nicht geöffneter Originalverpackung (soweit eine Verpackung vorhanden ist). Die Verpackung sollte der im Einzelhandel entsprechen. Ausnahme: Der Artikel war ursprünglich in einer Nichteinzelhandelsverpackung verpackt, z. B. unbedruckter Karton oder Plastikhülle. Weitere Einzelheiten im Angebot des Verkäufers. Alle Zustandsdefinitionen aufrufen– wird in neuem Fenster oder Tab geöffnet ... Mehr zum Thema Zustand",
	"table_modell": "Art",
	"table_futeilhöhe": "60 cm",
	"table_material": "Metall",
	"table_marke": "tectake",
	"table_finish": "Metallisch",
	"table_mae": "180cm x 200cm",
	"table_gewicht": "25-40 kg",
	"table_versand": "Inselversand ausgeschlossen.",
	"table_form": "Rechteckig",
	"table_stil": "Klassisch",
	"table_farbe": "Schwarz",
	"table_matratzeinklusive": "Nein",
	"table_breite": "180 cm",
	"table_liegefläche": "180 x 200 cm",
	"table_länge": "200 cm",
	"table_höhe": "90 cm",
	"table_herstellernummer": "401724",
	"table_produktart": "Klassisches Bett",
	"table_besonderheiten": "Mit Lattenrost",
	"table_kopfteilhöhe": "90 cm",
	"table_mpn": "401724",
	"table_ean": "4260435992417"
}]


```
