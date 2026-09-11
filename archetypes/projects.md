---
title: "{{ replace .File.ContentBaseName "-" " " | title }}"
summary: "Short one-line description."
technologies:
  - Go
date: {{ .Date }}
year_start: {{ now.Year }}
year_end: null
status: ""  # set to "ongoing" for active projects; leave empty if year_end is set
draft: false
cover: ""  # e.g. /images/covers/my-project.svg
github: ""
live: ""
store: ""
weight: 100
---

Write the project story here. What it is, why you built it, what’s interesting.
