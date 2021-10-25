import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import {Styles} from './Styles';
import CloseIcon from 'react-native-vector-icons/AntDesign';
import CheckIcon from 'react-native-vector-icons/Feather';

const SortItemsOptions = props => {
  const [selection, setSelection] = useState('');
  const data = props.route.params;

  useEffect(() => {
    setSelection(data.selection);
  }, [data]);

  const selectOption = item => {
    setSelection(item.id);
    props.navigation.navigate('SearchItems', {data: data, selection: item.id});
  };

  const renderItems = ({item, index}) => {
    return (
      <TouchableOpacity
        style={Styles.itemContainer}
        onPress={() => selectOption(item)}>
        <Text style={Styles.itemName}>{item.name}</Text>

        {selection === index && (
          <View style={Styles.checkIconContainer}>
            <CheckIcon name="check" size={25} />
          </View>
        )}
      </TouchableOpacity>
    );
  };

  return (
    <View style={Styles.container}>
      <View style={Styles.headerContainer}>
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <CloseIcon name="close" size={25} />
        </TouchableOpacity>
        <Text style={Styles.headerText}>Change sort</Text>
      </View>

      <FlatList
        data={[
          {id: 0, name: 'Most relevent'},
          {id: 1, name: 'New listed'},
          {id: 2, name: 'Close to me'},
          {id: 3, name: 'Lowest price'},
          {id: 4, name: 'Highest price'},
        ]}
        renderItem={item => renderItems(item)}
        contentContainerStyle={Styles.flatList}
      />
    </View>
  );
};

export default SortItemsOptions;
