# Gilded Rose Refactoring Kata Tech Test
This is my solution to the Gilded Rose Refactoring Kata tech test.

## The Brief
> "Hi and welcome to team Gilded Rose. As you know, we are a small inn with a prime location in a prominent city ran by a friendly innkeeper named Allison. We also buy and sell only the finest goods. Unfortunately, our goods are constantly degrading in quality as they approach their sell by date. We have a system in place that updates our inventory for us. It was developed by a no-nonsense type named Leeroy, who has moved on to new adventures. Your task is to add the new feature to our system so that we can begin selling a new category of items. First an introduction to our system:

> All items have a SellIn value which denotes the number of days we have to sell the item All items have a Quality value which denotes how valuable the item is At the end of each day our system lowers both values for every item Pretty simple, right? Well this is where it gets interesting:

> * Once the sell by date has passed, Quality degrades twice as fast
* The Quality of an item is never negative
* “Aged Brie” actually increases in Quality the older it gets
* The Quality of an item is never more than 50
* “Sulfuras”, being a legendary item, never has to be sold or decreases in Quality
* “Backstage passes”, like aged brie, increases in Quality as it’s SellIn value approaches; Quality increases by 2 when there are 10 days or less and by 3 when there are 5 days or less but Quality drops to 0 after the concert

> We have recently signed a supplier of conjured items. This requires an update to our system:

> * “Conjured” items degrade in Quality twice as fast as normal items

> Feel free to make any changes to the UpdateQuality method and add any new code as long as everything still works correctly. However, do not alter the Item class or Items property as those belong to the goblin in the corner who will insta-rage and one-shot you as he doesn’t believe in shared code ownership (you can make the UpdateQuality method and Items property static if you like, we’ll cover for you)."

## Installation

### Set up
```
$ git clone git@github.com:lsewilson/gilded-rose-kata.git
$ cd gilded-rose-kata
```

### Run tests
```
$ open SpecRunner.html
```

## Approach to Problem

I started by writing a suite of tests for the original code, with a particular focus on edge cases.

Then I created individual methods for each item type which updated the quality and sell in properties accordingly and added these back into the logic of the update_quality() function to allow the group of tests for that item to pass.

Once I had finished my initial refactor, I neatened up some elements of the code with the intention of extracting the individual elements out into their own classes. 
