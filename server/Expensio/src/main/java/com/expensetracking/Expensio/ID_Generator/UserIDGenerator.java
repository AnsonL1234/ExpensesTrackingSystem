package com.expensetracking.Expensio.ID_Generator;

import org.hibernate.engine.spi.SharedSessionContractImplementor;
import org.hibernate.id.IdentifierGenerator;

import java.math.BigInteger;
import java.util.UUID;

public class UserIDGenerator implements IdentifierGenerator {

    @Override
    public Object generate(SharedSessionContractImplementor sharedSessionContractImplementor, Object o) {
        String generateUIDNo = String.format("%110d", new BigInteger(UUID.randomUUID().toString().replace("-",""), 16));
        String uniqueID = "UID" + generateUIDNo.substring(generateUIDNo.length() - 10);
        return Long.parseLong(uniqueID, 16);
    }
}
