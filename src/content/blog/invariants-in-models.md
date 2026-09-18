---
title: "Models that respect invariants"
description: "A note on why teaching a network a symmetry is often better than teaching it data."
date: 2026-09-12
tags: ["research", "machine-learning"]
draft: false
---

A model that has to *learn* a symmetry from data spends capacity re-discovering
something we already knew. A model that is *built* with the symmetry gets it for free.

## The intuition

If a function is known to be rotation-invariant, encoding that invariance into the
architecture means the network never has to see two rotated copies of the same input
to understand they're the same thing. The invariance becomes a structural fact rather
than a statistical one.

## Open questions

1. Which invariants are worth hard-coding, and which are better learned?
2. How do we keep the invariant when the data distribution shifts?
3. Can we let the model *discover* the right symmetry group instead of assuming it?

These are the threads I keep pulling on. More to come.
