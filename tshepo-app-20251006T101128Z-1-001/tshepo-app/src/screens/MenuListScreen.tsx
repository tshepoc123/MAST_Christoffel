import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useMenu } from '../context/MenuContext';

export default function MenuListScreen({ navigation }: any) {
  const { items } = useMenu();

  const renderItem = (item: any) => (
    <TouchableOpacity
      key={item.id}
      style={styles.menuItem}
      onPress={() => navigation.navigate('ItemDetails', { item })}
    >
      <View style={styles.itemContent}>
        <View style={styles.itemMain}>
          <Text style={styles.itemName}>{item.name}</Text>
          <Text style={styles.itemCourse}>{item.course}</Text>
          <Text style={styles.itemDescription}>{item.description}</Text>
        </View>
        <View style={styles.itemSide}>
          <Text style={styles.itemPrice}>R{item.price}</Text>
          <View style={styles.addedIndicator}>
            <Text style={styles.addedText}>✓</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {items.length === 0 ? (
        <View style={styles.emptyState}>
          <Text style={styles.emptyTitle}>No dishes added yet</Text>
          <Text style={styles.emptyText}>
            Start adding your culinary creations to build your menu!
          </Text>
        </View>
      ) : (
        <FlatList
          data={items}
          renderItem={({ item }) => renderItem(item)}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FAFAFA', paddingTop: 20 },
  listContent: { padding: 15, paddingBottom: 30 },

  menuItem: {
    backgroundColor: '#FFFFFF',
    padding: 18,
    borderRadius: 20,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 4,
    borderLeftWidth: 6,
    borderLeftColor: '#FF6B6B',
  },

  itemContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },

  itemMain: {
    flex: 1,
    marginRight: 15,
  },

  itemName: {
    fontSize: 16,
    fontWeight: '800',
    color: '#2D3436',
    marginBottom: 2,
  },

  itemCourse: {
    fontSize: 12,
    fontWeight: '700',
    color: '#FF6B6B',
    marginBottom: 4,
    textTransform: 'uppercase',
  },

  itemDescription: {
    fontSize: 13,
    color: '#636E72',
    lineHeight: 18,
  },

  itemSide: {
    alignItems: 'flex-end',
  },

  itemPrice: {
    fontSize: 16,
    fontWeight: '800',
    color: '#00B894',
    marginBottom: 8,
  },

  addedIndicator: {
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: '#00B894',
    justifyContent: 'center',
    alignItems: 'center',
  },

  addedText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '800',
  },

  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
  },

  emptyTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#636E72',
    marginBottom: 10,
    textAlign: 'center',
  },

  emptyText: {
    fontSize: 16,
    color: '#888',
    textAlign: 'center',
    lineHeight: 22,
  },
});
