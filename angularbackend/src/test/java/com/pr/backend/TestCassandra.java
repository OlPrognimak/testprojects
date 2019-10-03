package com.pr.backend;

import com.datastax.oss.driver.api.core.CqlSession;
import com.datastax.oss.driver.api.core.context.DriverContext;
import com.datastax.oss.driver.internal.core.context.InternalDriverContext;
import com.datastax.oss.driver.internal.core.metadata.TopologyEvent;
import org.junit.Test;


import java.net.InetSocketAddress;


public class TestCassandra {

   // @Test
    public void testConnection(){
        CqlSession session = CqlSession.builder()
//                .addContactPoint(new InetSocketAddress("localhost", 9042))
//                .withAuthCredentials("cassandra", "cassandra")
//                .withLocalDatacenter("datacenter1")
                .build();
        // Public API:
        DriverContext context = session.getContext();

// Switch to the internal API to force a node down:
        InternalDriverContext internalContext = (InternalDriverContext) context;
        InetSocketAddress address = new InetSocketAddress("127.0.0.1", 9042);
        internalContext.getEventBus().fire(TopologyEvent.forceUp(address));

        session.execute("CREATE KEYSPACE IF NOT EXISTS  backend WITH replication = {"
                + " 'class': 'SimpleStrategy', "
                + " 'replication_factor': '3' "
                + "};" );
    }

   // @Test
    public void ctestSQL(){
        CqlSession session = CqlSession.builder().build();
        session.execute("CREATE TABLE backend.grid_data ( id UUID PRIMARY KEY, make text, model text, price double)");
    }
}
