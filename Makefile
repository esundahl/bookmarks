
build: components
	@component build -o public --dev

components: component.json
	@component install --dev

clean:
	rm -fr build components template.js

.PHONY: clean
