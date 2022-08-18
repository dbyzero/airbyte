import React from "react";
import { FormattedMessage } from "react-intl";
import styled from "styled-components";

import { Tooltip } from "components/base/Tooltip";
import { InfoIcon } from "components/icons/InfoIcon";

const Info = styled.div`
  margin-left: 7px;
  vertical-align: middle;
  display: inline-block;
`;

const LineBlock = styled.div`
  text-transform: none;
  font-weight: 500;
  font-size: 11px;
  line-height: 13px;
  letter-spacing: 0.3px;
  min-width: 230px;
  color: ${({ theme }) => theme.whiteColor};
  margin-bottom: 5px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const RoleToolTip: React.FC = () => {
  return (
    <Tooltip
      control={
        <Info>
          <InfoIcon />
        </Info>
      }
    >
      <>
        <LineBlock>
          <FormattedMessage id="settings.accessManagement.roleViewers" />
        </LineBlock>
        <LineBlock>
          <FormattedMessage id="settings.accessManagement.roleEditors" />
        </LineBlock>

        <LineBlock>
          <FormattedMessage id="settings.accessManagement.roleAdmin" />
        </LineBlock>
      </>
    </Tooltip>
  );
};

export default RoleToolTip;
