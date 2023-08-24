import { useSelector } from 'react-redux';
import { CardsContainer } from '@/components/Cards/Cards';
import { Link } from 'react-router-dom';
import { PrivateRoutes } from '@/models';
import { Card } from '@/components/Cards';

export function History({ isPreview }: { isPreview?: boolean }) {
  // const { history } = useSelector((store: any) => store.user);

  const history = [
    {
        "source": {
            "id": "cnn",
            "name": "CNN"
        },
        "author": "Chris Isidore",
        "title": "Teamster members ratify deal at UPS, putting strike threat to rest - CNN",
        "description": "Rank-and-file members of the Teamsters union have overwhelmingly ratified a five-year deal with UPS, putting an end to the threat of a crippling strike.",
        "url": "https://www.cnn.com/2023/08/22/business/ups-strike-vote-teamsters-union/index.html",
        "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230821154737-ups-delivery-truck-0630.jpg?c=16x9&q=w_800,c_fill",
        "publishedAt": "2023-08-23T00:22:00Z",
        "content": "Rank-and-file members of the Teamsters union have overwhelminglyratified a five-year deal with UPS, putting an end to the threat of a crippling strike.\r\nThe union said 86% of members had voted for th… [+4030 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Slashdot.org"
        },
        "author": null,
        "title": "Microsoft Announces Python In Excel - Slashdot",
        "description": "theodp writes: On Tuesday, Microsoft announced the Public Preview of Python in Excel, which \"runs securely on the Microsoft Cloud\".  From the Home Office in Redmond: \"Python is one of the most popular programming languages today, loved by businesses and stude…",
        "url": "https://developers.slashdot.org/story/23/08/22/1425228/microsoft-announces-python-in-excel",
        "urlToImage": "https://a.fsdn.com/sd/topics/microsoft_64100.png",
        "publishedAt": "2023-08-22T23:47:14Z",
        "content": "On Tuesday, Microsoft announced the Public Preview of Python in Excel, which \"runs securely on the Microsoft Cloud\".From the Home Office in Redmond: \"Python is one of the most popular programming lan… [+1762 chars]"
    },
    {
        "source": {
            "id": "espn",
            "name": "ESPN"
        },
        "author": "Jesse Rogers",
        "title": "White Sox fire vice president Ken Williams, GM Rick Hahn - ESPN - ESPN",
        "description": "Vice president Ken Williams and senior vice president and general manager Rick Hahn were fired by the Chicago White Sox on Tuesday, the team announced in a social media post, with owner Jerry Reinsdorf saying \"this is an incredibly difficult decision.\"",
        "url": "https://www.espn.com/mlb/story/_/id/38241494/white-sox-fire-vice-president-ken-williams-gm-rick-hahn",
        "urlToImage": "https://a2.espncdn.com/combiner/i?img=%2Fphoto%2F2023%2F0822%2Fr1214253_1296x729_16%2D9.jpg",
        "publishedAt": "2023-08-22T23:14:00Z",
        "content": "CHICAGO -- The Chicago White Sox fired executive vice president Ken Williams and general manager Rick Hahn, effective immediately, the team announced Tuesday with a news release and social media post… [+2930 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "CNBC"
        },
        "author": "Julie Coleman",
        "title": "Cramer says tech has a 'well-deserved premium' because of stocks like Nvidia - CNBC",
        "description": "CNBC's Jim Cramer on Tuesday reaffirmed his belief in the value of tech stocks.",
        "url": "https://www.cnbc.com/2023/08/22/cramer-cites-nvidia-for-well-deserved-premium-of-tech-stocks.html",
        "urlToImage": "https://image.cnbcfm.com/api/v1/image/104766841-IMG_9442r-jim-cramer.jpg?v=1692745354&w=1920&h=1080",
        "publishedAt": "2023-08-22T23:02:34Z",
        "content": "CNBC's Jim Cramer on Tuesday reiterated his faith in tech stocks, especially Nvidia and its \"Magnificent Seven\" peers.\r\nCramer recognized that some investors question how tech shares are so pricey, e… [+1517 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Yahoo Entertainment"
        },
        "author": "Scott Pianowski",
        "title": "Fantasy Football Rankings: Quarterback draft tiers, including salary cap values - Yahoo Sports",
        "description": "Scott Pianowski examines the 2023 fantasy quarterback landscape, breaking down the position into tiers to help you get ready.",
        "url": "https://sports.yahoo.com/fantasy-football-rankings-quarterback-draft-tiers-including-salary-cap-values-224615684.html",
        "urlToImage": "https://s.yimg.com/ny/api/res/1.2/7SXY.Espt6.q43hdZLErtQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2023-07/0ffae7c0-2fe2-11ee-b9f7-8154c72b30af",
        "publishedAt": "2023-08-22T22:46:15Z",
        "content": "For years, we've talked about the quarterback disconnect between real-life and fantasy football. NFL life is all about the quarterback. Fantasy football is about so many things before the quarterback… [+6692 chars]"
    },
    {
        "source": {
            "id": "reuters",
            "name": "Reuters"
        },
        "author": "Reuters",
        "title": "Canadian finance minister, who does not own a car, fined for speeding - Reuters Canada",
        "description": "Canadian Finance Minister Chrystia Freeland, an avid cyclist who says she does not own a car, was fined C$273 ($200) for speeding in her home province of Alberta, a spokesperson said on Tuesday.",
        "url": "https://www.reuters.com/world/americas/canadian-finance-minister-who-does-not-own-car-fined-speeding-2023-08-22/",
        "urlToImage": "https://www.reuters.com/resizer/RDFYVmI7jId16V1-PqPpbbEAdDQ=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/QMVARFJEIFOR7CBLKNTGSLPDQM.jpg",
        "publishedAt": "2023-08-22T22:41:00Z",
        "content": "OTTAWA, Aug 22 (Reuters) - Canadian Finance Minister Chrystia Freeland, an avid cyclist who says she does not own a car, was fined C$273 ($200) for speeding in her home province of Alberta, a spokesp… [+941 chars]"
    },
    {
        "source": {
            "id": "politico",
            "name": "Politico"
        },
        "author": null,
        "title": "Prosecutors: Trump Mar-a-Lago security aide flipped after changing lawyers - POLITICO",
        "description": "Special counsel Jack Smith’s team revealed the details of the employee’s about-face in a new filing.",
        "url": "https://www.politico.com/news/2023/08/22/trump-witness-reversal-testimony-jack-smith-00112355",
        "urlToImage": "https://static.politico.com/e6/c9/0c3e21b643f9b4f0eef010d66a1f/trump-capitol-riot-47640.jpg",
        "publishedAt": "2023-08-22T22:32:55Z",
        "content": "Special counsel Jack Smiths team revealed the details of the employees about-face as part of a filing demanded by Florida-based U.S. District Court Judge Aileen Cannon, who is overseeing the classifi… [+3263 chars]"
    },
    {
        "source": {
            "id": "politico",
            "name": "Politico"
        },
        "author": null,
        "title": "California mountain and desert towns dig out of the mud - POLITICO",
        "description": "Tropical Storm Hilary was dissipating as it moved over the Rocky Mountains.",
        "url": "https://www.politico.com/news/2023/08/22/california-tropical-storm-hilary-00112349",
        "urlToImage": "https://static.politico.com/1e/93/0d3ec655473a93b00c35ad5ea208/tropical-weather-21467.jpg",
        "publishedAt": "2023-08-22T22:16:25Z",
        "content": "As Hilary moved northeast into the neighboring state of Nevada, flooding was reported, power was out and a boil-water order was issued for about 400 households in the Mount Charleston area, where the… [+3200 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "NBCSports.com"
        },
        "author": "Charean Williams",
        "title": "Jerry Jones on Jonathan Taylor interest: I feel comfortable with the backs we have - NBC Sports",
        "description": "The Cowboys released Ezekiel Elliott this offseason, leaving them with unproven players behind starter Tony Pollard.",
        "url": "https://www.nbcsports.com/nfl/profootballtalk/rumor-mill/news/jerry-jones-on-jonathan-taylor-interest-i-feel-comfortable-with-the-backs-we-have",
        "urlToImage": "https://nbcsports.brightspotcdn.com/dims4/default/4e57ff3/2147483647/strip/true/crop/4256x2394+0+0/resize/1440x810!/quality/90/?url=https%3A%2F%2Fnbc-sports-production-nbc-sports.s3.amazonaws.com%2Fbrightspot%2Fbd%2Fd5%2Fea96d613423c81956514f13feb11%2Fhttps-api-imagn.com%2Frest%2Fdownload%2FimageID%3D19639702",
        "publishedAt": "2023-08-22T22:04:11Z",
        "content": "The Colts granted running back Jonathan Taylor permission to seek a trade on Monday. It has led to speculation about who might have interest in trying to work out a trade for Taylor.\r\nThe Dolphins re… [+1532 chars]"
    },
    {
        "source": {
            "id": "reuters",
            "name": "Reuters"
        },
        "author": "Luc Cohen, Jody Godoy",
        "title": "FTX's Bankman-Fried 'subsisting on bread and water' in jail, lawyer says - Reuters",
        "description": "FTX cryptocurrency exchange founder Sam Bankman-Fried is \"subsisting on bread and water\" because the federal jail where he is being held ahead of his fraud trial has not provided him with a vegan diet as he requested, his lawyer said on Tuesday.",
        "url": "https://www.reuters.com/legal/jailed-ftx-founder-bankman-fried-return-court-new-plea-2023-08-22/",
        "urlToImage": "https://www.reuters.com/resizer/0yHFRCvtgyb2AF5JGsmzqJtsJGI=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/7WEW6VKU75NINJFAAYDAAVGC64.jpg",
        "publishedAt": "2023-08-22T21:32:00Z",
        "content": "NEW YORK, Aug 22 (Reuters) - FTX cryptocurrency exchange founder Sam Bankman-Fried is \"subsisting on bread and water\" because the federal jail where he is being held ahead of his fraud trial has not … [+4139 chars]"
    },
    {
        "source": {
            "id": "the-washington-post",
            "name": "The Washington Post"
        },
        "author": "Sammy Westfall",
        "title": "Charred bodies of 18 migrants found in Greece amid European wildfires - The Washington Post",
        "description": "Two other people were killed in this week’s fires, bringing the death toll in Greece to at least 20.",
        "url": "https://www.washingtonpost.com/world/2023/08/22/greece-wildfires-bodies-heat-europe/",
        "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://d1i4t8bqe7zgj6.cloudfront.net/08-22-2023/t_a63211363162403eb94051c876088e6a_name_TB_1.jpg&w=1440",
        "publishedAt": "2023-08-22T21:08:00Z",
        "content": "Comment on this story\r\nComment\r\nEighteen people, believed by fire officials to be migrants or refugees, were found dead in Greeces Dadia Forest after a raging wildfire swept for the fourth day throug… [+4213 chars]"
    },
    {
        "source": {
            "id": "cnn",
            "name": "CNN"
        },
        "author": "Eric Bradner",
        "title": "Milwaukee GOP presidential debate: RNC announces 8 candidates have qualified - CNN",
        "description": "Eight Republicans have qualified for the party’s first 2024 presidential primary debate Wednesday night, the Republican National Committee announced Monday evening.",
        "url": "https://www.cnn.com/2023/08/21/politics/milwaukee-rnc-presidential-debate-candidates/index.html",
        "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230822121323-01-rnc-first-gop-presidential-debate-candidates-split.jpg?c=16x9&q=w_800,c_fill",
        "publishedAt": "2023-08-22T20:56:00Z",
        "content": "Eight Republicans have qualified for the partys first 2024 presidential primary debate Wednesday night, the Republican National Committee announced Monday evening. \r\nThe list includes North Dakota Go… [+7622 chars]"
    },
    {
        "source": {
            "id": "usa-today",
            "name": "USA Today"
        },
        "author": "Mary Walrath-Holdridge",
        "title": "What to know about COVID Pirola: How new lineage BA.2.86 differs from other variants - USA TODAY",
        "description": "A new COVID mutation, BA.2.86, has landed in the US, says the CDC. Nicknamed Pirola, the lineage has also been spotted in Israel, Denmark and the U.K.",
        "url": "https://www.usatoday.com/story/news/health/2023/08/21/pirola-covid-lineage-not-omicron-variant/70644689007/",
        "urlToImage": "https://www.usatoday.com/gcdn/presto/2023/08/21/USAT/21ef94ca-e6e0-4f67-aa79-dff39c15d8c8-GettyImages-1336071300.jpg?crop=2201,1239,x0,y58&width=2201&height=1239&format=pjpg&auto=webp",
        "publishedAt": "2023-08-22T20:48:45Z",
        "content": "The World Health Organization (WHO) and Centers for Disease Control (CDC) have announced another addition to their lists tracking variants of COVID-19 and this one may be a little different.\r\nDescrib… [+5705 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Deadline"
        },
        "author": "Sean Piccoli",
        "title": "National Union Solidarity Day In NYC Draws Big Names Amid Big Crowd: Jesse Eisenberg, Carla Gugino, F. Murray Abraham & More - Deadline",
        "description": "This is Day 113 of the WGA strike and Day 40 of the SAG-AFTRA strike.  National Union Solidarity Day kicked off on Tuesday in New York City with several hundred marchers fo…",
        "url": "https://deadline.com/2023/08/hollywood-strikes-picket-line-new-york-1235525267/",
        "urlToImage": "https://deadline.com/wp-content/uploads/2023/08/SAG-Strike-day-40-1.jpg?w=1024",
        "publishedAt": "2023-08-22T20:42:00Z",
        "content": "This is Day 113 of the WGA strike and Day 40 of the SAG-AFTRA strike. \r\nNational Union Solidarity Day kicked off on Tuesday in New York City with several hundred marchers forming a picket line that s… [+4262 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "YouTube"
        },
        "author": null,
        "title": "Can MRI scans screen men for prostate cancer? - BBC News - BBC News",
        "description": "A 10-minute MRI scan could be used to screen men for prostate cancer, according to a new study.The scans proved far more accurate at diagnosing cancer than b...",
        "url": "https://www.youtube.com/watch?v=8mVU0YdTxU4",
        "urlToImage": "https://i.ytimg.com/vi/8mVU0YdTxU4/maxresdefault.jpg",
        "publishedAt": "2023-08-22T20:30:01Z",
        "content": null
    },
    {
        "source": {
            "id": "ars-technica",
            "name": "Ars Technica"
        },
        "author": "Samuel Axon",
        "title": "Nvidia announces a community-made RTX remaster of Half-Life 2 - Ars Technica",
        "description": "PBR materials, full ray-tracing, and DLSS are coming to Half-Life 2.",
        "url": "https://arstechnica.com/gaming/2023/08/half-life-2-will-get-a-ray-tracing-remaster-using-rtx-remix/",
        "urlToImage": "https://cdn.arstechnica.net/wp-content/uploads/2023/08/Half-Life-2-RTX-on-760x380.png",
        "publishedAt": "2023-08-22T20:20:28Z",
        "content": "37 with \r\nA teaser for Half-Life 2's RTX conversion.\r\nFirst it came to Portal, now it's coming to the Source engine's other big classic: Half-Life 2 is getting a ray-tracing remaster thanks to the ef… [+3169 chars]"
    },
    {
        "source": {
            "id": "cnn",
            "name": "CNN"
        },
        "author": "Mary Gilbert, Nouran Salahieh",
        "title": "Tropical Storm Harold plowing through Texas with flash flooding - CNN",
        "description": "Tropical Storm Harold is plowing through Texas, triggering flash flooding and tornado warnings as the gusty storm pushes toward Mexico.",
        "url": "https://www.cnn.com/2023/08/22/weather/texas-tropical-storm-warning-tuesday/index.html",
        "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230822152725-01-harold-storm-0822-texas.jpg?c=16x9&q=w_800,c_fill",
        "publishedAt": "2023-08-22T20:02:00Z",
        "content": "Tropical Storm Harold is plowing through Texas, triggering flash flooding and tornado warnings as the gusty storm pushes toward Mexico.\r\nHarold made landfall just before 10 a.m. CT (11 a.m. ET) on Pa… [+3758 chars]"
    },
    {
        "source": {
            "id": "the-washington-post",
            "name": "The Washington Post"
        },
        "author": "Ian Livingston",
        "title": "The massive central U.S. heat wave is expanding and could set hundreds of records - The Washington Post",
        "description": "Heat index values continue to approach 130 in spots as widespread temperatures in the 100s overtake the Midwest. Warm overnight lows mean minimal relief.",
        "url": "https://www.washingtonpost.com/weather/2023/08/22/heat-wave-extreme-temperatures-midwest-plains-south/",
        "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/L5P7IWBX5RAPZPCWMPPXXZCLXQ.png&w=1440",
        "publishedAt": "2023-08-22T19:36:00Z",
        "content": "Comment on this story\r\nComment\r\nNearly 150 million people are under heat alerts Tuesday and through the midweek, as the Midwests most significant heat wave in years heads toward its peak and the Sout… [+5952 chars]"
    },
    {
        "source": {
            "id": "usa-today",
            "name": "USA Today"
        },
        "author": ", USA TODAY",
        "title": "Pakistan cable car: 6 children, 2 adults rescued using makeshift chairlift, helicopters - USA TODAY",
        "description": "Officials rescued six children and two adults trapped in a cable car hundreds of feet above the ground in Pakistan using makeshift chairlift.",
        "url": "https://www.usatoday.com/story/news/world/2023/08/22/pakistan-chairlift-cable-car/70647726007/",
        "urlToImage": "https://www.gannett-cdn.com/presto/2023/08/22/USAT/a8168591-a4c9-49c8-90b7-2eddfadb98bf-cable_car_logo.jpg?auto=webp&crop=1079,607,x0,y493&format=pjpg&width=1200",
        "publishedAt": "2023-08-22T19:07:30Z",
        "content": "Officials have rescued eight people, including six children, from a cable car hundreds of feet above the ground in Pakistan Tuesday using helicopters and a makeshift chairlift, authorities said.\r\nThe… [+1016 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "KPRC Click2Houston"
        },
        "author": "NBC News",
        "title": "15 dead, 36 injured in Mexico bus crash, most apparently Venezuelan migrants - KPRC Click2Houston",
        "description": "A bus carrying mostly Venezuelan migrants crashed into a freight truck Tuesday in central Mexico, killing at least 15 people and injuring 36, local authorities said.",
        "url": "https://www.click2houston.com/news/local/2023/08/22/15-dead-36-injured-in-mexico-bus-crash-most-apparently-venezuelan-migrants/",
        "urlToImage": "https://res.cloudinary.com/graham-media-group/image/upload/f_auto/q_auto/c_thumb,w_700/v1/media/gmg/WNPDDZ7GOFDODPQ35GKA5KPN5Y.jpg?_a=ATAPphC0",
        "publishedAt": "2023-08-22T19:06:52Z",
        "content": "MEXICO CITY A bus carrying mostly Venezuelan migrants crashed into a freight truck Tuesday in central Mexico, killing at least 15 people and injuring 36, local authorities said.\r\nThe government of Pu… [+589 chars]"
    }
]

  const data = isPreview ? history.slice(0, 6) : history;

  return (
    <CardsContainer>
      {data.map((card: any, index: number) => (
        <Card
          key={index}
          title={card.title}
          image={card.urlToImage}
          description={card.description}
          onClick={() => window.open(card.url)}
        />
      ))}
      {isPreview && (
        <Link to={`/${PrivateRoutes.PRIVATE}/${PrivateRoutes.HISTORY}`}>{`see all (${
          history.length - data.length
        })`}</Link>
      )}
    </CardsContainer>
  );
}
