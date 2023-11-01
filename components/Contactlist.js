import React from 'react'
import {SectionList, Text} from 'react-native'

import Row from './Row';

const renderItem = obj => <Row {...(obj.item)}/>

const renderSectionHeader = obj => <Text>{obj.section.title}</Text>


const ContactList = props => {

    const convertData = contacts => {
        let result = [];

        for (let i = 0; i < contacts.length; i++) {
            let firstLetter = contacts[i].name[0].toUpperCase();
            let existingTitle = result.find((entry) => entry?.title === firstLetter);

            if (existingTitle) {
                existingTitle.data.push({
                name: `${contacts[i].name}`,
                phone: contacts[i].phone,
                });
            } else {
                
                result.push({
                title: firstLetter,
                data: [
                    {
                    name: `${contacts[i].name}`,
                    phone: contacts[i].phone,
                    },
                ],
                });
            }
            
        }
        return result
    }
    
    if (!props.contacts) {
        return (
            <Text>{'no contacts'}</Text>
        )
    }
    let res = convertData(props.contacts)

    return (
        <SectionList 
            renderItem={renderItem}
            renderSectionHeader={renderSectionHeader}
            sections={res}
            keyExtractor={item=>item.phone}
        />
    )
}
export default ContactList
