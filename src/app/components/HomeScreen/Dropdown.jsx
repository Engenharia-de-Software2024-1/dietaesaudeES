import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

export default function Dropdown({data,placeholder, value, setValue}) {
    const [open, setOpen] = useState(false);
    const [items, setItems] = useState(data);

    return (
        <View style={styles.dropdownContainer}>
            <DropDownPicker
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
                style={{ zIndex: open ? 1000 : 1 }}
                placeholder={placeholder}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    dropdownContainer:{
        width: 110,
        margin: 5,
    }
})