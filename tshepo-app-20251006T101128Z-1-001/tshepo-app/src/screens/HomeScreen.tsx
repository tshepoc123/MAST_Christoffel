import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  FlatList, 
  TouchableOpacity,
  Image 
} from 'react-native';
import { useMenu } from '../context/MenuContext';
import { Course, MenuItem } from '../types';

const MENU_ITEMS: MenuItem[] = [
  { id: '1', name: 'Avocado Toast', description: 'Sourdough, avocado & feta', course: 'Breakfast', price: '95' },
  { id: '2', name: 'Smoothie Bowl', description: 'Banana & berry blend', course: 'Breakfast', price: '120' },
  { id: '3', name: 'Pancakes', description: 'Fluffy with maple syrup', course: 'Breakfast', price: '140' },
  { id: '4', name: 'English Breakfast', description: 'Eggs, bacon, beans & sausage', course: 'Breakfast', price: '160' },
  { id: '5', name: 'Veggie Burger', description: 'Plant patty with onions', course: 'Light Meals', price: '180' },
  { id: '6', name: 'Chicken Salad', description: 'Grilled chicken & greens', course: 'Light Meals', price: '150' },
  { id: '7', name: 'Quiche Lorraine', description: 'Classic with bacon & cheese', course: 'Light Meals', price: '130' },
  { id: '8', name: 'Grilled Sandwich', description: 'Cheese & tomato', course: 'Light Meals', price: '110' },
  { id: '9', name: 'Chocolate Brownie', description: 'Rich with vanilla ice cream', course: 'Desserts', price: '85' },
  { id: '10', name: 'Red Velvet Cake', description: 'Cream cheese frosting', course: 'Desserts', price: '95' },
  { id: '11', name: 'Cheesecake', description: 'New York style', course: 'Desserts', price: '100' },
  { id: '12', name: 'Fruit Tart', description: 'Seasonal fruits', course: 'Desserts', price: '110' },
];

export default function HomeScreen({ navigation }: any) {
  const { items, addItem, getTotalItems } = useMenu();

  const renderItem = ({ item }: { item: MenuItem }) => (
    <View style={styles.card}>
      <View style={{ flex: 1 }}>
        <Text style={styles.name}>{item.name}</Text>
        <View style={styles.categoryBadge}>
          <Text style={styles.categoryText}>{item.course}</Text>
        </View>
        <Text style={styles.description}>{item.description}</Text>
        <Text style={styles.price}>R {item.price}</Text>
      </View>
      <TouchableOpacity 
        style={[styles.addBtn, items.some(i => i.id === item.id) && styles.addedBtn]} 
        onPress={() => addItem(item)}
        disabled={items.some(i => i.id === item.id)}
      >
        <Text style={styles.addBtnText}>
          {items.some(i => i.id === item.id) ? 'Added' : '+'}
        </Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <Image 
          source={require('../assets/images/myP.png')}
          style={styles.logo}
        />
        <View style={styles.headerText}>
          <Text style={styles.restaurantName}>Christoffel's Cuisine</Text>
          <View style={styles.counterWrapper}>
            <Text style={styles.counterLabel}>Selected Dishes</Text>
            <Text style={styles.counterNumber}>{getTotalItems()}</Text>
          </View>
        </View>
      </View>

      {/* MENU LIST */}
      <FlatList
        data={MENU_ITEMS}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ padding: 15 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF8F0' },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    margin: 15,
    padding: 15,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  logo: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 3,
    borderColor: '#FF6B6B',
  },
  headerText: {
    flex: 1,
    marginLeft: 15,
  },
  restaurantName: {
    fontSize: 20,
    fontWeight: '800',
    color: '#2D3436',
    marginBottom: 8,
  },
  counterWrapper: {
    flexDirection: 'row',
    backgroundColor: '#FF6B6B',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 12,
    alignItems: 'center',
    alignSelf: 'flex-start',
  },
  counterLabel: {
    fontSize: 12,
    color: '#fff',
    fontWeight: '600',
    marginRight: 8,
  },
  counterNumber: {
    fontSize: 16,
    fontWeight: '800',
    color: '#fff',
    backgroundColor: '#fff3',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 6,
  },

  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 15,
    marginBottom: 12,
    borderLeftWidth: 6,
    borderLeftColor: '#FF6B6B',
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 4,
  },
  name: { fontSize: 16, fontWeight: '700', color: '#2D3436', marginBottom: 4 },
  
  categoryBadge: {
    alignSelf: 'flex-start',
    backgroundColor: '#FFE5D9',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 8,
    marginBottom: 6,
  },
  categoryText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#FF6B6B',
  },

  description: { fontSize: 14, color: '#636E72', marginBottom: 8 },
  price: { fontSize: 16, fontWeight: '800', color: '#FF6B6B' },
  addBtn: {
    backgroundColor: '#FF6B6B',
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  addedBtn: { backgroundColor: '#00B894' },
  addBtnText: { color: '#fff', fontSize: 18, fontWeight: '700' },
});
