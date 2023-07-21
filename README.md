# Alík na vlastní oči

Soubor dat sesbíraných z oficiálních srazových listin či vlastního,
osobního sdílení na nástěnkách či jiných kanálech.

Cílem je vizualizovat, kdo z Alíkových kamarádů se kdy potkal.

I přes veškerou snahu nelze garantovat správnost dat ani jejich
vyobrazení. Vše zde je pouze orientační a primárně pro zábavu.

## Data

Data jsou organizována v adresáři `data`, kde jednotlivé soubory
reprezentují každý společný sraz. V souborech jsou uvedena uživatelská
jména všech, kteří se daného srazu zúčastnili a tím pádem se nejspíše
potkali. Neoficiální srazy a jiná osobní setkání fungují na stejném
principu. Soubory se řídí jednoduchou avšak neustálenou jmennou
konvencí.

Pokud možno a známo, uživatelská jména jsou sjednocena pod jedno
nejnovější či nejvíce obecně známé.  Totéž se vztahuje na všemožné
varianty téhož, například různé velikosti písmen a ozdobných znaků
kolem.  Totéž platí, pokud uživatel aktivně používá více účtů: stále je
to jedna skutečná osoba.

## Jak na to

Soubory v adresáři `data` reprezentují jednotlivé srazy.  Přidání nového
srazu obnáší vytvoření nového souboru a uvedení všech účastníků.  Pokud
chceme zanést jednotlivá setkání dvou lidí, je třeba vytvořit soubor pro
každé z nich.

Výstupní data, jak datový DOT soubor tak SVG vizualizaci, můžeme
vytvořit prostým voláním `make`.

## Licence

Zdrojem dat jsou veřejně dostupně informace o Alíkových srazech a data
dobrovolně poskytnutá jeho kamarády. Soubor dat v tomto repozitáři je k
dispozici pod licencí CC0 ("Creative Commons CC0 1.0 Universal").

Nástroje pro zpracování a vizualizaci jsou svobodný software pod licencí
MIT/X11, jejíž text lze nalézt v souboru `LICENSE`.
