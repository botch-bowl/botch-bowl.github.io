import * as React from 'react';
import PropTypes from 'prop-types';
import { Text, Button } from '@chakra-ui/react';
import { Link } from 'gatsby';
import TableLine from 'src/assets/images/table-line.svg';
import { cTable, cTableRow, cTableLine, cButtonWrapper } from './styles.module.scss';

const propTypes = {
  withCTA: PropTypes.bool
};

const defaultProps = {
  withCTA: false
};

const MembershipPrices = ({ withCTA }) => (
  <div className={cTable}>
    <TableLine className={cTableLine} />
    <div className={cTableRow}>
      <div>
        <Text>bis 10 Jahre</Text>
      </div>
      <div>
        <Text>kostenlos (ohne T-Shirt)</Text>
      </div>
    </div>
    <TableLine className={cTableLine} />
    <div className={cTableRow}>
      <div>
        <Text>10 bis 16 Jahre</Text>
      </div>
      <div>
        <Text>30€</Text>
      </div>
    </div>
    <TableLine className={cTableLine} />
    <div className={cTableRow}>
      <div>
        <Text>über 16 Jahre</Text>
      </div>
      <div>
        <Text>50€</Text>
      </div>
    </div>
    <TableLine className={cTableLine} />
    {withCTA && (
      <Link to="/mitgliedschaft/" className={cButtonWrapper}>
        <Button variant="cta" size="sm">
          Jetzt Mitglied werden
        </Button>
      </Link>
    )}
  </div>
);

MembershipPrices.propTypes = propTypes;
MembershipPrices.defaultProps = defaultProps;

export default MembershipPrices;
