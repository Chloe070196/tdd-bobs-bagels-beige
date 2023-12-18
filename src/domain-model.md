# Domain Model

## Part 1

DONE - As a member of the public
So I can order a bagel when I want to
I'd like to add an item to my basket

DONE - As a member of the public,
So that I can change my order
I'd like to remove an item from my basket

## Part 2

DONE -As a member of the public,
So that I can not overfill my small bagel basket
I'd like to know when my basket is full when I try adding an item beyond my basket capacity.

DONE - As a Bob's Bagels manager,
So that I can record more sales
I’d like to create baskets with larger capacity when I need to.

As a member of the public
So that I can maintain my sanity
I'd like to know if I try to remove an item that doesn't exist in my basket.

## Part 3

As a member of the public,
So that I can know how much my bagels are,
I’d like to see the price of each item before I add it to my basket.

As a member of the public,
So that I can prepare to pay
When I go to checkout I'd like to know the total sum of the bagels in my basket

Objects: Basket, Bagel
Properties: Capacity, ID
Verbs: Add, Remove, Know when (is full), Create, Know if (item isn't in basket)

<!-- re-format the table -->
<!-- data types are missing -->
<!-- scenarios are missing -->
<!-- messages to messages ??? -->
<!-- four outputs, seven methods in basket.js -->
| Objects  | Properties | Messages | Notes    | Scenarios | Output |
| - | - | -| - | - | - |
| Basket   | contents(@object[]), capacity(num(@)integer), ID counter, price key    |
| | | addBagel(sku(@string), numOfBagels(@integer))| (note: includes new item with next ID), increment ID counter | sku is valid | contents(@Object[])|
| | | | TO BE ADDED | sku is NOT valid | throw error |
|          | | removeBagel(id(@integer)) | | bagel found | contents(@Object[]) |
|          | | | TO BE ADDED | bagel not found | throw error|
|          | | setCapacity(newCapacity(@Integer))| | new capacity is a positive integer| capacity(@integer) |
|          | | setCapacity(newCapacity(@Integer))| TO BE ADDED | new capacity is not a positive integer| throw error |
|          | | getTotal()| | | total(@number) |
|          | | countBagelsInBasket()|| | count(@number) |
|          | | getSubTotal()|| | subTotal(@number) |
|          | | basketIsFull()? || output: inconsistent | @string / @boolean|
|          | | containsItemofThisID()? | MISSING FROM CODE BASE| if item found | true|
|          | |  | | if item not found| false|
| Bagel    |  ID(@integer)|
| |        | getPriceOfBagel(sku(@string)) ||| price(@number)|
| |        | getTypeOfBagel(sku(@string)) ||| variant(@string)|
