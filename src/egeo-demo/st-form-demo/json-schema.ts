/*
 * © 2017 Stratio Big Data Inc., Sucursal en España.
 *
 * This software is licensed under the Apache License, Version 2.0.
 * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;
 * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the terms of the License for more details.
 *
 * SPDX-License-Identifier: Apache-2.0.
 */
export const JSON_SCHEMA: any = {
      'type': 'object',
      'properties': {
         'name': {
            'title': 'Application name',
            'description': 'The name of the Crossdata instance.',
            'info': 'More additional information',
            'type': 'string',
            'default': 'crossdata-1',
            'maxLength': 40,
            'minLength': 5
         },
         'cores': {
            'title': 'CPUs',
            'description': 'CPU shares to allocate to each Crossdata instance.',
            'type': 'number',
            'default': 1.0,
            'minimum': 0.5,
            'maximum': 10.0,
            'exclusiveMinimum': true
         },
         'cores2': {
            'title': 'prueba',
            'description': 'CPU shares to allocate to each Crossdata instance.',
            'type': 'integer',
            'default': 1.0,
            'minimum': 0.5,
            'maximum': 10.0
         },
         'memory': {
            'title': 'Memory',
            'description': 'Memory (MiB) to allocate to each Crossdata instance.',
            'type': 'number',
            'default': 2048.0,
            'minimumExclusive': 1023.9,
            'maximumExclusive': 51200
         },
         'instances': {
            'title': 'Instances',
            'description': 'Number of Crossdata instances to run.',
            'type': 'integer',
            'default': 1,
            'minimum': 1,
            'optional': true
         },
         'log_level': {
            'title': 'Log Level',
            'description': 'Set the log level: TRACE,DEBUG,INFO,WARN,ERROR and FATAL',
            'type': 'string',
            'default': 'INFO',
            'enum': ['TRACE', 'DEBUG', 'INFO', 'WARN', 'ERROR', 'FATAL'],
            'optional': true
         },
         'label_constraint': {
            'title': 'Contraint label',
            'description': 'Cluster label that will accept to launch Crossdata. (all, intelligence...)',
            'type': 'string',
            'default': '',
            'optional': true
         },
         'accepted_resources_roles': {
            'title': 'Accepted resources roles',
            'description': 'Mesos roles that will accept Crossdata. (slave_public,slave_private...)',
            'type': 'string',
            'default': '',
            'optional': true
         },
         'streams_parallelism': {
            'title': 'Streams parallelism',
            'description': 'Production parallelism of streams for responses',
            'type': 'integer',
            'default': 2,
            'minimum': 1,
            'optional': true
         },
         'federation': {
            'title': 'Federation',
            'description': 'Federation type',
            'type': 'string',
            'enum': ['LDAP', 'AD'],
            'default': 'LDAP',
            'optional': true
         }
      },
      'required': ['name', 'cores', 'memory']
   }
