#!/usr/bin/env python3
"""Меняет домен-заглушку во всех файлах сайта и в site.config.json.
Использование: python3 tools/set-domain.py https://ваш-домен.com"""
import json, pathlib, sys

root = pathlib.Path(__file__).resolve().parent.parent
if len(sys.argv) != 2 or not sys.argv[1].startswith("https://"):
    sys.exit("Нужен адрес вида: python3 tools/set-domain.py https://ваш-домен.com")
new = sys.argv[1].rstrip("/")
cfg = root / "site.config.json"
data = json.loads(cfg.read_text(encoding="utf-8"))
old = data["domain"].rstrip("/")
n = 0
for p in root.rglob("*"):
    if p.is_file() and p.suffix in {".html", ".xml", ".txt", ".json", ".md"} and "design" not in p.parts and p.name != "README.ru.md":
        s = p.read_text(encoding="utf-8")
        if old in s:
            p.write_text(s.replace(old, new), encoding="utf-8"); n += 1
print(f"Готово: {old} → {new}, изменено файлов: {n}")
