// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  BlockQuote,
  Quote,
  Cite,
  Image,
  CodePane,
  Deck,
  Slide,
  Text,
  Notes,
  Magic,
  Appear,
  Link,
  List,
  ListItem,
  S,
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// import 'prismjs/themes/prism-okaidia.css';

// Images, Code samples
import images from './images';
import code from './code';

// Require CSS
require('normalize.css');

export const textColor = {
  primary: '#3a3c4b',
  secondary: '#f7f7f8',
  tertiary: '#8b86e3',
  quartenary: '#f5a0a4',
};

const theme = createTheme(textColor, {
  primary: { name: 'Khula', googleFont: true, styles: ['300', '800'] },
  secondary: 'Helvetica',
});

export const textSize = {
  large: '5.5em',
  medium: '3.5em',
  small: '2em',
  extraSmall: '1.3em',
};

export const slideProps = {
  maxWidth: 1300,
  transition: ['fade'],
  bgColor: 'primary',
};

export const Title = ({
  children,
  textColor = 'secondary',
  textSize = '3.5em',
  lineHeight = 1,
  style,
}) => (
  <Text
    margin="0px"
    bold
    lineHeight={lineHeight}
    textColor={textColor}
    textSize={textSize}
    style={style}
  >
    {children}
  </Text>
);

export const Attribution = ({ children }) => (
  <Text margin="0px" lineHeight={1} textColor="tertiary" textSize="1em">
    {children}
  </Text>
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
        controls={false}
        progress="none"
        contentWidth={1300}
      >
        <Slide {...slideProps}>
          <Text textSize={textSize.large} bold textColor="secondary">
            Write queries,
          </Text>
          <Text
            margin="0px"
            bold
            textColor="tertiary"
            textAlign="left"
            textSize={textSize.large}
          >
            not code!
          </Text>
        </Slide>
        <Slide
          maxWidth={1300}
          transition={['fade']}
          bgImage={images.peggy}
          align="center flex-start"
        >
          <Text
            margin="50px"
            bold
            lineHeight={1}
            textColor="secondary"
            textSize={textSize.medium}
          >
            @peggyrayzis
          </Text>
        </Slide>
        <Slide {...slideProps}>
          <Notes>
            <p>
              I'm an open source engineer for Apollo where I build tools to help
              bring GraphQL to more teams across the world. Over the past few
              months, we've been working on a lot of cool stuff that's going to
              change the game for how we manage data in our React apps and I
              can't wait to share it all with you.
            </p>
          </Notes>
          <Image src={images.apollo} width="100%" />
        </Slide>
        <Slide {...slideProps}>
          <Notes>
            <p>
              Let's dive right in! I want you all to think about how you
              currently manage data in your React apps. This includes everything
              from local data to server data.
            </p>
          </Notes>
          <Title>How do you manage data in your React application?</Title>
        </Slide>
        <Magic>
          <Slide maxWidth={1300} bgColor="primary">
            <Notes>
              <p>
                Some of you might say MobX, some of you might already be using a
                GraphQL client like Apollo, but the majority of React developers
                are using Redux. Around 60% if you look at npm downloads.
              </p>
            </Notes>
            <Title textColor="tertiary">60% of React</Title>
            <Title textColor="tertiary">developers use Redux</Title>
            <Title textColor="tertiary">to manage data.</Title>
          </Slide>
          <Slide maxWidth={1300} bgColor="primary">
            <Notes>
              <p>
                How are we managing data with Redux? If you've used it before,
                you know that Redux doesn't support making network requests out
                of the box. You have to download one of these three libraries
                and learn their approach to creating async actions before you
                can fetch any remote data.
              </p>
            </Notes>
            <Title>redux-saga</Title>
            <Title>redux-thunk</Title>
            <Title>redux-observable</Title>
          </Slide>
          <Slide maxWidth={1300} bgColor="primary">
            <Notes>
              <p>
                If you're using Redux in a production environment, these two
                packages are essential for performance. First, you must
                normalize the data you get back before storing it. To select
                your data in the state tree from within your components, you
                also need to create selectors to avoid wasted calculations.
              </p>
            </Notes>
            <Title>normalizr</Title>
            <Title>reselect</Title>
          </Slide>
        </Magic>
        <Slide {...slideProps} bgImage={images.reduxNpm}>
          <Notes>
            <p>
              That's just the bare minimum. If you need any additional features
              like optimistic mutations or offline persistence, you'll need to
              sort through almost 7000 redux middleware packages on npm.
              <br />
              <br />
              It may sound like I'm picking on Redux here - that's not the case.
              I think Redux is an excellent paradigm that has changed all of our
              code for the better by focusing on pure functions & immutable
              data. But, it isn't designed to cover all of the requirements
              production React apps have when managing data without a lot of
              manual configuration.
            </p>
          </Notes>
        </Slide>
        <Slide maxWidth={1300} transition={['fade']} bgImage={images.dog}>
          <Notes>
            <p>
              This excess of configuration can lead to fatigue. Within the
              JavaScript community, I think most of our frustration with
              configuration has been centered around build tools. But, I think
              the configuration fatigue problem extends to any tooling where our
              users have to make a choice in order to execute a core feature.
              <br />
              <br />
              Configuration fatigue is a huge issue in our community today. It
              not only results in wasted hours tinkering with setup instead of
              building a product. Perhaps the most troubling consequence of all
              is that it discourages newcomers from learning and prevents them
              from being productive with React.
            </p>
          </Notes>
          <Appear>
            <Text
              margin="0px"
              bold
              lineHeight={1}
              textColor="secondary"
              textSize={textSize.large}
            >
              Configuration fatigue
            </Text>
          </Appear>
        </Slide>
        <Slide {...slideProps} bgColor="tertiary">
          <Notes>
            <p>
              We can help ease the pain of configuration fatigue by guiding the
              community toward cohesion. This is challenging for the React
              ecosystem as we've never had a cohesive story for managing our
              data, even after 5 years. This term is pretty vague, what exactly
              do I mean by cohesive data story?
            </p>
          </Notes>
          <Title>
            Up until now, React has never had a cohesive data story 😢
          </Title>
        </Slide>
        <Slide {...slideProps}>
          <Notes>
            <p>
              If we can generally agree upon how we should handle these core
              features, we'll inch closer to the dream of an ideal data layer
              for React apps. Here are some features you shouldn't have to
              configure:<br />
              - Declarative data fetching: Ideally, we should be able to receive
              data in a way that maps cleanly to the props our components expect<br />
              - Optimistic mutations are a given for making users perceive your
              app as performant. This should be trivial to execute.<br />
              - Async control flow should work out of the box. You shouldn't
              have to learn three libraries just to make your first network
              request.<br />
              - Combining local & server data is an interesting one. Your
              components can be made up of local & server data, so there's no
              reason why you shouldn't be able to easily combine them<br />
              - A great developer experience complete w/ dev tools for easy
              debugging is also a must <br />
              I got this criteria from Dan's talk two years at React Europe and
              I think it's a pretty accurate way to evaluate a data management
              solution. Since that talk, many libraries have come close, but
              none have been able to offer all of these features out of the box
              yet. It turns out GraphQL is a great solution for incorporating
              many of these features, which is what we're going to learn today.
            </p>
          </Notes>
          <Title textColor="tertiary">Cohesive data story:</Title>
          <List style={{ display: 'inline-block' }}>
            {[
              'Declarative data fetching',
              'Built-in optimistic mutations',
              'Easy to test async control flow',
              'Combining local & server data',
              'Great developer experience',
            ].map(item => (
              <Appear key={item}>
                <ListItem bold textSize={textSize.small}>
                  {item}
                </ListItem>
              </Appear>
            ))}
          </List>
          <Appear>
            <Text
              margin="0px"
              lineHeight={1}
              textColor="tertiary"
              textSize="1em"
            >
              - @dan_abramov, The Redux Journey (React Europe 2016)
            </Text>
          </Appear>
        </Slide>
        <Slide {...slideProps} bgColor="tertiary">
          <Notes>
            <p>
              Quick show of hands - who here has used GraphQL before? Let's do a
              quick refresher on what GraphQL is. It's a query language
              developed by Facebook that makes working with data much more
              intuitive.
            </p>
          </Notes>
          <Title>What is GraphQL?</Title>
        </Slide>
        <Slide {...slideProps} align="center flex-start">
          <Notes>
            <p>
              Let's pretend we're hungry for a sandwich. I hate to do this
              example right before lunch, but it's all I got for now. Using
              GraphQL is kind of like ordering a sandwich in a restaurant. To
              ask your server for your sandwich, you'll use an operation called
              a query. You can be very specific about what is and isn't on your
              sandwich - you do this by specifying fields.
            </p>
          </Notes>
          <Title textColor="tertiary">GraphQL:</Title>
          <div style={{ display: 'flex' }}>
            <CodePane
              lang="graphql"
              textSize="1em"
              source={code.graphql}
              style={{ minWidth: 0, flex: 1 }}
            />
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                flex: 1,
                justifyContent: 'center',
              }}
            >
              <Text
                bold
                textAlign="left"
                textColor="quartenary"
                textSize={textSize.small}
                padding="0px 0px 40px 0px"
              >
                Operation: A query, mutation, or subscription
              </Text>
              <Text
                bold
                textAlign="left"
                textColor="quartenary"
                textSize={textSize.small}
                padding="40px 0px 0px 0px"
              >
                Field: A property that you want to retrieve
              </Text>
            </div>
          </div>
        </Slide>
        <Slide {...slideProps}>
          <Notes>
            <p>
              If you don't know what to order, you can browse all the available
              options to you via the schema. Think of the schema as your menu.
              When your sandwich arrives, it will be in exactly the same shape
              as how you ordered it. No more or less ingredients.
            </p>
          </Notes>
          <div style={{ display: 'flex' }}>
            <CodePane
              lang="graphql"
              textSize="1em"
              source={code.schema}
              style={{ minWidth: 0, flex: 1 }}
            />
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                flex: 1,
                justifyContent: 'center',
              }}
            >
              <Text
                bold
                textAlign="left"
                textColor="quartenary"
                textSize={textSize.small}
                padding="0px 0px 40px 0px"
              >
                Schema: A strongly typed blueprint for your data
              </Text>
            </div>
          </div>
        </Slide>
        <Slide {...slideProps}>
          <Notes>
            <p>
              REST requires a lot more manual work. With REST, you first have to
              know where your bread, toppings, and meat exist and call your
              endpoints to get all of the ingredients. Once you have them, you
              have to filter them down in order to isolate the ingredients that
              you want. On top of that, once you have your desired ingredients,
              you then have to combine them into the sandwich itself.
            </p>
          </Notes>
          <Title textColor="tertiary">REST:</Title>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Text
              textColor="secondary"
              textFont="monospace"
              textSize={textSize.extraSmall}
              padding="20px 0px 20px 0px"
            >
              GET /api/sandwich/bread<br />
              GET /api/sandwich/meat<br />
              GET /api/sandwich/toppings
            </Text>
            <Title textColor="secondary" textSize={textSize.small}>
              ⬇
            </Title>
            <Title textColor="quartenary" textSize={textSize.small}>
              Filter down what you want
            </Title>
            <Title textColor="secondary" textSize={textSize.small}>
              ⬇
            </Title>
            <Title textColor="quartenary" textSize={textSize.small}>
              Combine them together
            </Title>
          </div>
        </Slide>
        <Slide
          maxWidth={1300}
          transition={['fade']}
          bgDarken={0.3}
          bgImage={images.sandwich}
        >
          <Notes>
            <p>
              So if we're at a restaurant, GraphQL is like ordering your
              sandwich from your server. REST is like going back into the
              kitchen and making the sandwich yourself. Personally, I'd rather
              have the first option. The second is too error prone. With
              GraphQL, you're always guaranteed to get back exactly what you
              ordered.
            </p>
          </Notes>
          <Text
            margin="0px"
            bold
            lineHeight={1}
            textColor="secondary"
            textSize={textSize.medium}
          >
            With GraphQL, you always get back exactly what you ordered.
          </Text>
        </Slide>
        <Slide {...slideProps}>
          <Notes>
            <p>
              Wouldn't it be awesome if we could delegate ordering this sandwich
              to something else? We need a way to handle sending out our order
              and also delivering our sandwich to us. That's where Apollo comes
              in! You're looking at a preview of our new API for React Apollo,
              featuring a Query component with render props.
            </p>
          </Notes>
          <CodePane
            lang="jsx"
            textSize={textSize.extraSmall}
            source={code.sandwichQuery}
          />
        </Slide>
        <Slide {...slideProps} bgColor="tertiary">
          <Notes>
            <p>
              Enough with the sandwich metaphor, let's learn about what Apollo
              is and how it can simplify data management in our React apps.
            </p>
          </Notes>
          <Title>What is Apollo?</Title>
        </Slide>
        <Slide {...slideProps}>
          <Notes>
            <p>
              If you've heard of Apollo before, your first thought is probably a
              GraphQL client. While that may have been true last year, Apollo is
              so much more than just a client that requests and receives GraphQL
              data from a server.
            </p>
          </Notes>
          <Image src={images.apollo} width="30em" />
          <S
            type="strikethrough"
            style={{ textDecorationColor: textColor.tertiary }}
          >
            <Title>
              A GraphQL client<br />
              <br />
            </Title>
          </S>
        </Slide>
        <Slide {...slideProps}>
          <Notes>
            <p>
              Apollo is actually the first cohesive data story that React has
              ever seen, all thanks to the power of GraphQL.
            </p>
          </Notes>
          <Image src={images.apollo} width="30em" />
          <Title textColor="tertiary">
            A cohesive data story, powered by GraphQL
          </Title>
        </Slide>
        <Slide {...slideProps}>
          <Notes>
            <p>
              I know this is a pretty bold claim, so I'm going to back it up.
              Over the past year, we were already solving these problems without
              even knowing it. A lot of this is all thanks to the nature of
              GraphQL. As we saw before, GraphQL data maps really nicely to
              props in our React components. Apollo Client has built in
              optimistic UI without you having to configure anything. Resolvers
              offer a unified API for performing async side effects on both the
              client & the server, again without you having to set this up
              yourself. Now with our state-link that allows you to manage local
              data with Apollo Client, we can combine client & server data in
              one query. We also have excellent dev tools that help you
              understand what's happening with your GraphQL data.
            </p>
          </Notes>
          <Title textColor="tertiary" textSize={textSize.small}>
            Over the past year, we gradually started solving:
          </Title>
          <List style={{ display: 'inline-block' }}>
            {[
              'Declarative data fetching',
              'Built-in optimistic mutations',
              'Easy to test async control flow',
              'Combining local & server data',
              'Great developer experience',
            ].map(item => (
              <ListItem key={item} bold textSize={textSize.small}>
                {item}
              </ListItem>
            ))}
          </List>
        </Slide>
        <Slide {...slideProps} padding="0px">
          <Notes>
            <p>
              All of these wins have resulted in tremendous growth for the
              project, more than 350% last year according to npm's research.
              Companies ranging from startups to enterprises like the New York
              Times and Ticketmaster have started using Apollo in production.
              All of this is setting up for 2018 to be a breakout year for
              Apollo.
            </p>
          </Notes>
          <Link href="https://www.npmjs.com/npm/the-state-of-javascript-frameworks-2017-part-2-the-react-ecosystem">
            <Image src={images.ecosystem} height="700px" />
          </Link>
        </Slide>
        <Slide {...slideProps} padding="0px">
          <Notes>
            <p>
              One of the reasons we've been able to drive adoption so quickly is
              our low barrier of entry to getting started and feeling productive
              with Apollo Client. In 6 lines of code, our default setup will
              give you caching, optimistic UI, data fetching, and more without
              you having to configure it yourself.
              <br />
              There is a little magic that goes on behind the scenes to create
              these sensible defaults, so let's dive into the internals of
              Apollo Client. The client itself is just a thin orchestration
              wrapper over the Apollo cache and your link chain, which is your
              network stack. Both are customizable if you need to layer on
              additional features.
            </p>
          </Notes>
          <Title textColor="tertiary">Sensible defaults</Title>
          <div style={{ display: 'inline-block' }}>
            <CodePane
              lang="javascript"
              textSize="1.15em"
              source={code.setup}
              margin="0px"
              style={{ maxWidth: 'none' }}
            />
          </div>
        </Slide>
        <Slide {...slideProps}>
          <Notes>
            <p>
              The Apollo cache is awesome because it normalizes and stores your
              data for you. You don't have to mess around with normalizr or set
              any of this up yourself.
            </p>
          </Notes>
          <Title textColor="secondary">
            The Apollo cache normalizes and stores your data out of the box.
            <span style={{ color: textColor.tertiary }}> #0CJS</span>
          </Title>
        </Slide>
        <Slide {...slideProps} padding="0px">
          <Notes>
            <p>
              That's a really good thing, because it turns out caching GraphQL
              data is "real fucking rowdy", to quote my buddy Ken Wheeler. Also
              known as JavaScript Kanye. Why do we need to normalize our data?
              It seems like a lot of work.
            </p>
          </Notes>
          <Image src={images.cache} height="680px" />
        </Slide>
        <Slide {...slideProps} padding="0px">
          <Notes>
            <p>
              Normalization is important because there are often multiple paths
              to access the same data with GraphQL. Here we have a sample UI for
              an article feed and an editor detail view. We have a query to get
              all of the articless for our feed. Let's say we want to make a
              change to our article's title with the updateArticle mutation on
              the detail page. Ideally, we want the data on the articles feed
              page to update with the new title as well. Keeping your data
              consistent and in sync is exactly why we normalize.
            </p>
          </Notes>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div>
              <Image src={images.cacheDiagram} height="690px" />
              <Link href="https://dribbble.com/shots/3782878-Article-Feed-for-iOS">
                <Attribution>UI from Ben Bate, dribbble</Attribution>
              </Link>
            </div>
            <Title textSize={textSize.small} style={{ width: '30%' }}>
              How do<br />we keep our data consistent?
            </Title>
          </div>
        </Slide>
        <Slide {...slideProps} padding="0px">
          <Notes>
            <p>
              So you understand what's going on under the hood, I'm going to try
              and demystify the Apollo cache's normalization process for you.
              First, we have our articles query. You'll also see we have our
              response payload, which is exactly in the shape of the query, with
              the addition of one field. That meta field is called __typename
              and it's added automatically for you when the data comes back from
              the server. For each nested part of the query with a typename and
              id, we split them out into their own node in the cache in a
              flattened map. The cache key for each node is the typename plus
              the id. For the articles query, we can see that the cache value is
              a list of pointers. This is because the cache reconstructs each
              result from the flattened nodes in the cache.
            </p>
          </Notes>
          <Title textColor="tertiary" lineHeight={1.3}>
            Normalization:
          </Title>
          <Image
            margin="30px 0 30px 0"
            src={images.normalizationDiagram}
            width="1300px"
          />
          <Title textColor="tertiary" textSize={textSize.small}>
            Your cache key is __typename:id
          </Title>
        </Slide>
        <Slide {...slideProps} padding="0px">
          <Notes>
            <p>
              Don't worry if this sounds a little complicated, you can fully
              inspect your store in Apollo DevTools to see what's going on. On
              the left, you can click to explore all of the nodes in the cache.
            </p>
          </Notes>
          <Title textColor="tertiary" textSize={textSize.small}>
            Inspect the store with Apollo DevTools!
          </Title>
          <Image src={images.normalization} height="600px" />
        </Slide>
        <Slide {...slideProps}>
          <Notes>
            <p>
              As we discussed earlier, Apollo Client is made up of both the
              cache and your Apollo Link chain. You can think of your link chain
              as your network stack that manages the request and response
              cycles.
            </p>
          </Notes>
          <Title>Apollo Link handles the request and response cycle.</Title>
        </Slide>
        <Slide {...slideProps} padding="0px">
          <Notes>
            <p>
              Here's an example illustrating a common link chain for an Apollo
              app. Links are composable. They return Observables and can either
              forward the operation along the chain or they return a result.
              Since you can hook in at any point in the cycle, links can be
              either middleware or afterware too. You can also intercept the
              request before it hits the server, which is what we're doing here
              with our state link.
            </p>
          </Notes>
          <Title textColor="tertiary">Apollo Link</Title>
          <Image src={images.links} width="1200px" />
          <List style={{ display: 'inline-block' }}>
            {[
              'Links forward the request or fulfill a result',
              'Can be middleware or afterware',
              'Can intercept the request before it hits the server',
            ].map(item => (
              <ListItem key={item} bold textSize={textSize.extraSmall}>
                {item}
              </ListItem>
            ))}
          </List>
        </Slide>
        <Slide {...slideProps}>
          <Notes>
            <p>
              With its awesome out of the box experience, Apollo Client is
              simple to get started and already includes a lot of core features
              just by using the defaults. However, if you're a more advanced
              user, it's extremely extensible.
            </p>
          </Notes>
          <Title>
            Simple for core features, yet extensible for advanced features
          </Title>
        </Slide>
        <Slide {...slideProps}>
          <Notes>
            <p>
              A great example of this is apollo-cache-persist, a package that
              allows you to persist your cache to any kind of offline storage.
              Here in this example, we're using React Native AsyncStorage and
              persisting the cache when the app is in the background. You can
              also persist on every write or set up your own trigger. I want to
              give a shoutout to James Reggio for his awesome work on this
              package - he wrote it for his app Banter.fm and worked with our
              team to open source it.
            </p>
          </Notes>
          <Title textColor="tertiary">apollo-cache-persist</Title>
          <div style={{ display: 'inline-block', width: '870px' }}>
            <CodePane
              padding="0px"
              lang="javascript"
              textSize={textSize.extraSmall}
              source={code.persist}
            />
          </div>
          <Title textSize={textSize.small}>Thanks @jamesreggio! 🙌</Title>
        </Slide>
        <Slide {...slideProps} padding="0px">
          <Notes>
            <p>
              Since Apollo Links allow you to hook into the request cycle at any
              point, you can start to get really creative with how you use them.
              Here are just a few links our community members have built to add
              new features to Apollo, like the ability to query a webworker
              using GraphQL.
            </p>
          </Notes>
          <Title textColor="tertiary">Customize your client</Title>
          <Image src={images.community} height="550px" />
        </Slide>
        <Slide {...slideProps} bgColor="tertiary">
          <Notes>
            <p>blah</p>
          </Notes>
          <Title>apollo-link-state 🎉</Title>
        </Slide>
        <Slide {...slideProps}>
          <Notes>
            <p>blah</p>
          </Notes>
          <Title textSize={textSize.small}>
            2017: Separate stores, no cohesion
          </Title>
          <Image src={images.acOld} height="600px" />
        </Slide>
        <Slide {...slideProps}>
          <Notes>
            <p>blah</p>
          </Notes>
          <Title textSize={textSize.small}>
            2018: One unified interface for all data
          </Title>
          <Image src={images.acNew} width="1300px" />
        </Slide>
        <Slide {...slideProps}>
          <Notes>
            <p>blah</p>
          </Notes>
          <CodePane
            padding="0px"
            lang="javascript"
            textSize="1.1em"
            source={code.stateLink}
          />
        </Slide>
        <Magic>
          <Slide maxWidth={1300} bgColor="primary">
            <Title>State tree</Title>
          </Slide>
          <Slide maxWidth={1300} bgColor="primary">
            <Title>Data graph</Title>
          </Slide>
        </Magic>
        <Slide {...slideProps}>
          <List
            style={{
              display: 'inline-block',
              listStylePosition: 'outside',
              padding: 'inherit',
            }}
          >
            <ListItem bold textColor="tertiary" textSize={textSize.small}>
              The Apollo cache represents your normalized data graph<br />
              <br />
            </ListItem>
            {[
              'No need to write your own selectors',
              'Attach client data to server data while maintaining separate entities',
            ].map((item, idx) => (
              <Appear key={item}>
                <ListItem bold textColor="tertiary" textSize={textSize.small}>
                  {item}
                  <br />
                  <br />
                </ListItem>
              </Appear>
            ))}
          </List>
        </Slide>
        <Magic>
          <Slide maxWidth={1300} bgColor="primary">
            <Title>Actions</Title>
          </Slide>
          <Slide maxWidth={1300} bgColor="primary">
            <Title>Queries & mutations</Title>
          </Slide>
        </Magic>
        <Slide {...slideProps}>
          <Notes>
            <p>blah</p>
          </Notes>
          <Title textSize="3.2em">3 actions, 1 request 😐</Title>
          <CodePane
            padding="0px"
            lang="javascript"
            textSize="1.1em"
            source={code.actions}
          />
        </Slide>
        <Slide {...slideProps}>
          <Notes>
            <p>blah</p>
          </Notes>
          <Title textSize="3.2em">Write queries, not code</Title>
          <CodePane
            padding="0px"
            lang="javascript"
            textSize="1.1em"
            source={code.postsQuery}
          />
        </Slide>
        <Slide {...slideProps}>
          <Notes>
            <p>blah</p>
          </Notes>
          <CodePane
            padding="0px"
            lang="javascript"
            textSize="1em"
            source={code.posts}
          />
        </Slide>
        <Slide {...slideProps} padding="0px">
          <Notes>
            <p>blah</p>
          </Notes>
          <Title textSize="3.2em">Track all loading states</Title>
          <Image src={images.loading} height="600px" />
        </Slide>
        <Magic>
          <Slide maxWidth={1300} bgColor="primary">
            <Title>Reducers &</Title>
            <Title>action creators</Title>
          </Slide>
          <Slide maxWidth={1300} bgColor="primary">
            <Title>Resolvers</Title>
          </Slide>
        </Magic>
        <Slide {...slideProps}>
          <List
            style={{
              display: 'inline-block',
              listStylePosition: 'outside',
              padding: 'inherit',
            }}
          >
            <ListItem bold textColor="tertiary" textSize={textSize.small}>
              One API for both client & server resolvers<br />
              <br />
            </ListItem>
            {[
              'Async resolvers are supported out the box',
              'Return values from mutations',
            ].map((item, idx) => (
              <Appear key={item}>
                <ListItem bold textColor="tertiary" textSize={textSize.small}>
                  {item}
                  <br />
                  <br />
                </ListItem>
              </Appear>
            ))}
          </List>
        </Slide>
        <Slide {...slideProps}>
          <Notes>
            <p>blah</p>
          </Notes>
          <Title textSize={textSize.extraSmall}>
            The Apollo cache is your single source of truth
          </Title>
          <CodePane
            padding="0px"
            lang="javascript"
            textSize="1em"
            source={code.resolvers}
          />
        </Slide>
        <Slide {...slideProps} bgColor="tertiary">
          <Notes>
            <p>blah</p>
          </Notes>
          <Title>
            With Apollo, you can combine local and server data in one query!
          </Title>
        </Slide>
        <Slide {...slideProps}>
          <Notes>
            <p>blah</p>
          </Notes>
          <Title textSize={textSize.small}>
            @client directive specifies client fields
          </Title>
          <CodePane
            padding="0px"
            lang="javascript"
            textSize="1em"
            source={code.combinedQuery}
          />
        </Slide>
        <Slide {...slideProps} bgColor="primary">
          <Notes>
            <p>blah</p>
          </Notes>
          <BlockQuote>
            <Quote
              textColor="secondary"
              textSize={textSize.small}
              style={{
                borderLeft: `4px dotted ${textColor.quartenary}`,
                fontWeight: 'none',
                lineHeight: '1.2',
                letterSpacing: '1px',
              }}
            >
              Switching from Redux to Apollo Link State simplified how I
              interact with my codebase significantly, by allowing me to
              integrate my local state with GraphQL & Apollo.
            </Quote>
            <Cite bold textSize={textSize.extraSmall}>
              Scott Tolinski, Level Up Tuts (@stolinski)
            </Cite>
          </BlockQuote>
        </Slide>
        <Slide {...slideProps} bgColor="tertiary">
          <Notes>
            <p>blah</p>
          </Notes>
          <Title>We want to make GraphQL accessible to everyone.</Title>
        </Slide>
        <Slide {...slideProps}>
          <Notes>
            <p>blah</p>
          </Notes>
          <Title textColor="tertiary">apollo-link-rest</Title>
          <CodePane
            padding="0px"
            lang="javascript"
            textSize="1em"
            source={code.rest}
          />
          <Title textSize={textSize.small}>
            Thanks @fbartho & @sabativi! 👏
          </Title>
        </Slide>
        <Slide {...slideProps}>
          <Title textColor="tertiary">
            Benefits of a GraphQL server vs. REST link
          </Title>
          <List
            style={{ display: 'inline-block', listStylePosition: 'inside' }}
          >
            {[
              'Easier to share code across teams',
              'Smaller payloads',
              'All the latest features (persisted queries, cache control)',
            ].map(item => (
              <ListItem key={item} bold textSize={textSize.small}>
                {item}
              </ListItem>
            ))}
          </List>
        </Slide>
        <Slide {...slideProps} bgColor="tertiary">
          <Notes>
            <p>blah</p>
          </Notes>
          <Title>What's next 🚀</Title>
        </Slide>
        <Slide {...slideProps}>
          <Notes>
            <p>blah</p>
          </Notes>
          <Title textSize={textSize.small} textColor="tertiary">
            Client-side schemas
          </Title>
          <CodePane
            padding="0px"
            lang="javascript"
            textSize="0.9em"
            source={code.typeDefs}
          />
        </Slide>
        <Slide {...slideProps} bgImage={images.introspection} />
        <Slide {...slideProps}>
          <Title>
            Soon, all of your tooling will be unified across the stack.
          </Title>
        </Slide>
        <Slide
          maxWidth={1300}
          transition={['fade']}
          bgImage={images.peggy2}
          align="center flex-start"
        >
          <Text
            margin="50px"
            bold
            lineHeight={1}
            textColor="primary"
            textSize={textSize.medium}
          >
            @peggyrayzis
          </Text>
        </Slide>
      </Deck>
    );
  }
}
