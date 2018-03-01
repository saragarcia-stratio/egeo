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
   '$schema': 'http://json-schema.org/schema#',
   'properties': {
      'genericIntegerInput': {
         'title': 'Generic number',
         'description': 'Generic input description',
         'type': 'integer',
         'default': 8,
         'minimum': 6,
         'maximum': 10,
         'exclusiveMinimum': false,
         'exclusiveMaximum': false
      },
      'genericNumberInput': {
         'title': 'Generic number',
         'description': 'Generic input description',
         'type': 'number',
         'default': 1,
         'minimum': 0.5,
         'maximum': 10,
         'exclusiveMinimum': false,
         'exclusiveMaximum': false
      },
      'requiredNumber': {
         'title': 'Required number',
         'description': 'Required input description',
         'type': 'integer',
         'default': 5
      },
      'minNumber': {
         'title': 'Min number',
         'description': 'Min number input description',
         'type': 'number',
         'default': 8.6,
         'minimum': 6
      },
      'maxNumber': {
         'title': 'Max number',
         'description': 'Max number input description',
         'type': 'number',
         'default': 5,
         'maximum': 6
      },
      'minAndMaxNumber': {
         'title': 'Number in a range',
         'description': 'This number has to be between 7 and 19',
         'type': 'number',
         'default': 8.6,
         'minimum': 6,
         'maximum': 10,
         'exclusiveMinimum': true,
         'exclusiveMaximum': true
      },
      'genericTextInput': {
         'title': 'Required text',
         'description': 'This is a required text with a length of 2-6 characters and only the character a is valid',
         'type': 'string',
         'default': 'aa',
         'minLength': 2,
         'maxLength': 6,
         'pattern': '(a)+'
      },
      'minLengthText': {
         'title': 'Text with a max length',
         'description': 'You have to type a text with 10 characters at least',
         'type': 'string',
         'default': '',
         'minLength': 10
      },
      'maxLengthText': {
         'title': 'Text with a max length',
         'description': 'You have to type a text with less than 20 characters',
         'type': 'string',
         'default': '',
         'maxLength': 20
      },
      'minAndMaxLengthText': {
         'title': 'Text with a min and max length',
         'description': 'You have to type a text with less than 20 and 10 characters at least',
         'type': 'string',
         'default': '',
         'minLength': 10,
         'maxLength': 20
      },
      'url': {
         'title': 'URL',
         'description': 'You have to type a valid url',
         'type': 'string',
         'pattern': '(https?:\\/\\/(?:www\\.|(?!www))[^\\s\\.]+\\.[^\\s]{2,}|www\\.[^\\s]+\\.[^\\s]{2,})'
      },
      'boolean': {
         'title': 'Enable or disable this property',
         'description': 'You can enable or disable this property',
         'type': 'boolean',
         'default': true
      },
      'noDescription': {
         'title': 'Property without description',
         'type': 'string'
      },
      'log_level': {
         'title': 'Log Level',
         'semantic_name': 'Log Level',
         'description': 'Set the log level: TRACE,DEBUG,INFO,WARN,ERROR and FATAL',
         'type': 'string',
         'default': 'INFO',
         'placeholder': 'Select a log level',
         'enum': ['TRACE', 'DEBUG', 'INFO', 'WARN', 'ERROR', 'FATAL'],
         'optional': true
      }
   },
   'required': [
      'url', 'genericNumberInput', 'genericIntegerInput', 'requiredNumber', 'requiredText', 'log_level'
   ]
};
