import * as React from 'react';
import PropTypes from 'prop-types';
import Container from 'src/components/Container';
import Section from 'src/components/Section';
import Heading from 'src/components/Heading';
import Slider from 'src/components/Slider';
import EventCard from 'src/components/EventCard';
// import NoMoreEventsCard from 'src/components/NoMoreEventsCard';

const propTypes = {
  data: PropTypes.objectOf(PropTypes.object).isRequired
};

const EventsSlider = ({ data }) => (
  <Section>
    <Container>
      <Heading pre="Skatekurse, Parties und co" style={{ marginBottom: '40px' }}>
        Events.
      </Heading>
    </Container>
    <Slider>
      <div>
        <EventCard title="Botch. Inferno Bowl Jam" date="18.09.2021" image={data.allFile.nodes[0].childImageSharp} />
      </div>
    </Slider>
  </Section>
);

EventsSlider.propTypes = propTypes;

export default EventsSlider;
