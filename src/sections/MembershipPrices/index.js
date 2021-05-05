import * as React from 'react';
import { Text, Button } from '@chakra-ui/react';
import { Link } from 'gatsby';
import TableLine from 'src/assets/images/table-line.svg';
import { cTable, cTableRow, cTableLine, cButtonWrapper } from './styles.module.scss';

const MembershipPrices = () => (
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
    <Link to="/mitgliedschaft/" className={cButtonWrapper}>
      <Button variant="cta" size="sm">
        Jetzt Mitglied werden
      </Button>
    </Link>
  </div>
);

export default MembershipPrices;
