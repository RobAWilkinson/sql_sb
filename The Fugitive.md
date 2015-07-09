# Manhunt

# Set up and Install.

## Mac users install pgcommander 
## Windows users see <http://www.enterprisedb.com/products-services-training/pgdownload#windows>

* in your terminal after run `createdb world`
* import the current database `psql world -f ./world.sql`
* and open it with `psql world



We're going to use what we've learned already about searching with SQL commands, and apply it – to chase down and capture an elusive fugitive.

Follow the clues, **write down both the commands you used and the actual answers.**



## The Chase

**Clue #1:** We recently got word that someone fitting the fugitve's description has been traveling through Southern Europe. He's most likely traveling someplace where he won't be noticed, so find the least populated country in Southern Europe, and we'll start looking for him there.

```SQL
-- YOUR SQL QUERY GOES HERE
```
**Answer:**

**Clue #2:** Now that we're here, we have insight that the fugitive was seen attending language classes in this country's officially recognized language. Check our databases and find out what language is spoken in this country, so we can call in a translator to work with you.

Make your query return the countrys name, and its official status!
```SQL
-- YOUR SQL QUERY GOES HERE
```
**Answer:**

**Clue #3:** We have new news on the classes the fugitive attended – our agent tell us he's moved on to a different country, a country where people speak *only* the language he was learning. Find out which nearby country speaks nothing but that language.

Make your query return the countrycode and the percentage as well as the country name
```SQL
-- YOUR SQL QUERY GOES HERE
```
**Answer:**

**Clue #4:** We're booking the first flight out – maybe we've actually got a chance to catch him this time. There are only two cities he could be flying to in the country. One is named the *same* as the country – that would be too obvious. We're following our gut on this one; find out what other city in that country he might be flying to.

```SQL
-- YOUR SQL QUERY GOES HERE
```
**Answer:**

**Clue #5:** Oh no, he pulled a switch – there are two cities with very similar names, but in totally different parts of the globe! She's headed to South America as we speak; go find a city whose name is *like* the one we were headed to, but doesn't end the same. Find out the city, and do another search for what country it's in. Hurry!

```SQL
-- YOUR SQL QUERY GOES HERE
```
**Answer:**

**Clue #6:** We're close! Our South American agent says he just got a taxi at the airport, and is headed towards the capital! Look up the country's capital, and get there pronto! Send us the name of where you're headed and we'll follow right behind you!

```SQL
-- YOUR SQL QUERY GOES HERE
```
**Answer:**

**Clue #7:** He knows we're on to him – his taxi dropped him off at the international airport, and he beat us to the boarding gates. We have one chance to catch him, we just have to know where he's heading and beat him to the landing dock.

Lucky for us, he's getting cocky. She left us a note, and I'm sure he thinks he's very clever, but if we can crack it, we can finally put him where he belongs – behind bars.

      Our playdate of late has been unusually fun –
      As an agent, I'll say, you've been a joy to outrun.
      And while the food here is great, and the people – so nice!
      I need a little more sunshine with my slice of life.
      So I'm off to add one to the population I find
      In a city of "holds breath" 
      Three million six hundred ninty four thousand eight hundred and now twenty one.

We're counting on you, gumshoe. Find out where he's headed, send us the info, and we'll be sure to meet him at the gates with bells on.

```SQL
-- YOUR SQL QUERY GOES HERE
```
**Answer:**
