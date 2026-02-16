---
title: "Falling in Love with the Problem: On Curiosity and Co-Training"
description: "I believe you have to love the problem first, and be genuinely interested in solving it, the same way you tackled puzzles as a child."
date: 2026-01-27
tags: [Machine Learning, Co-Training, Semi-Supervised Learning, Curiosity]
---

I believe you have to love the problem first, and be genuinely interested in solving it, the same way you tackled puzzles as a child, not for any external reward, but for the joy of the activity itself. Once that curiosity kicks in, you start seeing pieces of the puzzle everywhere, in conversations with friends and teammates, in books, articles, songs, and even in the trees.

One concept I fell in love with the moment I encountered it, I think back in 2014, is co-training. The idea is beautifully simple, you train two different models on distinct features, or views, of the same data. As they learn, they teach each other by trading their most confident predictions, effectively turning unlabeled data into useful training examples without human help.

I still remember the artistic formulation of it, "The original co-training paper described experiments using co-training to classify web pages into academic course home page or not, the classifier correctly categorized 95% of 788 web pages with only 12 labeled web pages as examples." To me, that was the first click of semi supervised learning and knowledge distillation, concepts formalized nicely by the great G. Hinton in his paper, "Distilling the Knowledge in a Neural Network". A must read, I think, for any serious ML researcher.

From that time on, I tried to apply the concept whenever it could help, simply because I loved the elegance of it. I was able to use it for car classification when I was supervised by Dr. Mina Sartipi at UTC in 2020, scaling an image classification dataset automatically with very few labeled examples. I even wrote a script to automate collecting them from the web. Yes, I am too lazy, so I like to automate everything I can, to avoid repeating myself.

I am really thankful for the decision to pursue this nice intersection of computer science, machine learning, and system design, or whatever you want to call it. We probably should not use names anymore, it looks like just ideas and innovations at this point in time.