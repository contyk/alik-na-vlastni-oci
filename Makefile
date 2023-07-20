BASE = alik-na-vlastni-oci

all: $(BASE).svg

$(BASE).gv: data
	./$(BASE).py $< $@

$(BASE).svg: $(BASE).gv
	sfdp -Gstart=3 -Goverlap=prism $< \
		| gvmap -c 1 -d 42 -e -k -O \
		| neato -Gstart=3 -n -Ecolor="#00000020" -Tsvg \
		| head -n -1 \
		| sed -e '/^<!--.*-->$$/d' -e 's/&#45;/-/g' \
		> $@.tmp
	cat $@.tmp $@.js > $@
	echo '</svg>' >> $@
	rm -f $@.tmp

.PHONY: all
