/*
 * Copyright (c) 2022 Airbyte, Inc., all rights reserved.
 */

package io.airbyte.integrations.base.errors.messages;

import io.airbyte.integrations.base.errors.utils.ConnectorType;

public class DefaultErrorMessage extends ErrorMessage {

  @Override
  public String getErrorMessage(String stateCode, Exception exception) {
    return getDefaultErrorMessage(stateCode, exception);
  }

  @Override
  public ConnectorType getConnectorType() {
    return ConnectorType.DEFAULT;
  }

}