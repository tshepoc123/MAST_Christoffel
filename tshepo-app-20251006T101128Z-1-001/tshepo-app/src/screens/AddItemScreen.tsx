import React, { useState } from 'react';
import { 
  View, 
  TextInput, 
  Text, 
  StyleSheet, 
  ScrollView,
  TouchableOpacity,
  Alert
} from 'react-native';
import { useMenu } from '../context/MenuContext';
import { Course, MenuItem } from '../types';

const COURSES: { name: Course; color: string }[] = [
  { name: 'Breakfast', color: '#FFD700' },
  { name: 'Light Meals', color: '#00B894' },
  { name: 'Desserts', color: '#FF6B6B' },
];

export default function AddItemScreen({ navigation }: any) {
  const { addItem } = useMenu();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [course, setCourse] = useState<Course>('Breakfast');
  const [price, setPrice] = useState('');

  const handleSave = () => {
    if (!name.trim() || !description.trim() || !price.trim()) {
      Alert.alert('Validation Error', 'Please complete all fields');
      return;
    }

    if (isNaN(parseFloat(price)) || parseFloat(price) <= 0) {
      Alert.alert('Validation Error', 'Please enter a valid price');
      return;
    }

    const newItem: MenuItem = { 
      id: Date.now().toString(),
      name: name.trim(),
      description: description.trim(),
      course,
      price: parseFloat(price).toFixed(2),
    };

    addItem(newItem);

    Alert.alert('Success!', `"${name}" has been added to your menu!`, [
      { 
        text: 'Excellent', 
        onPress: () => {
          setName('');
          setDescription('');
          setPrice('');
          setCourse('Breakfast');
        }
      }
    ]);
  };

  const isFormValid = name.trim() && description.trim() && price.trim() && !isNaN(parseFloat(price));

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.formContainer}>
        <Text style={styles.title}>Create New Dish</Text>
        <Text style={styles.subtitle}>Craft your culinary masterpiece</Text>
        
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Dish Name</Text>
          <TextInput 
            placeholder="Enter dish name" 
            value={name} 
            onChangeText={setName} 
            style={styles.input} 
            placeholderTextColor="#999"
          />
        </View>
        
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Description</Text>
          <TextInput 
            placeholder="Describe the dish" 
            value={description} 
            onChangeText={setDescription} 
            style={[styles.input, styles.textArea]} 
            multiline
            numberOfLines={4}
            placeholderTextColor="#999"
          />
        </View>
        
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Course Type</Text>
          <View style={styles.courseGrid}>
            {COURSES.map((courseOption) => (
              <TouchableOpacity
                key={courseOption.name}
                style={[
                  styles.courseOption,
                  { backgroundColor: courseOption.color + '22' },
                  course === courseOption.name && { borderWidth: 2, borderColor: courseOption.color }
                ]}
                onPress={() => setCourse(courseOption.name)}
              >
                <Text style={[
                  styles.courseText,
                  course === courseOption.name && { color: courseOption.color, fontWeight: '700' }
                ]}>
                  {courseOption.name}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
        
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Price ($)</Text>
          <TextInput 
            placeholder="0.00" 
            value={price} 
            onChangeText={setPrice} 
            style={styles.input} 
            keyboardType="decimal-pad"
            placeholderTextColor="#999"
          />
        </View>
        
        <View style={styles.buttonGroup}>
          <TouchableOpacity 
            style={styles.cancelButton}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.cancelButtonText}>Cancel</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={[styles.saveButton, !isFormValid && styles.saveButtonDisabled]}
            onPress={handleSave}
            disabled={!isFormValid}
          >
            <Text style={styles.saveButtonText}>Add to Menu</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FAFAFA', paddingTop: 20 },
  formContainer: {
    backgroundColor: '#FFFFFF',
    margin: 15,
    padding: 25,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  title: {
    fontSize: 22,
    fontWeight: '800',
    color: '#2D3436',
    textAlign: 'center',
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 14,
    color: '#636E72',
    textAlign: 'center',
    marginBottom: 20,
  },
  inputGroup: { marginBottom: 18 },
  label: {
    fontSize: 12,
    fontWeight: '700',
    color: '#2D3436',
    marginBottom: 6,
    letterSpacing: 1,
  },
  input: {
    borderWidth: 2,
    borderColor: '#E8E8E8',
    padding: 14,
    borderRadius: 12,
    backgroundColor: '#F9F9F9',
    fontSize: 16,
    color: '#2D3436',
  },
  textArea: {
    height: 90,
    textAlignVertical: 'top',
  },
  courseGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  courseOption: {
    width: '48%',
    padding: 12,
    marginBottom: 10,
    borderRadius: 12,
    alignItems: 'center',
  },
  courseText: {
    fontSize: 12,
    color: '#636E72',
    textAlign: 'center',
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  cancelButton: {
    flex: 1,
    padding: 14,
    borderRadius: 12,
    backgroundColor: '#B2BEC3',
    marginRight: 10,
    alignItems: 'center',
  },
  saveButton: {
    flex: 2,
    padding: 14,
    borderRadius: 12,
    backgroundColor: '#FF6B6B',
    marginLeft: 10,
    alignItems: 'center',
    shadowColor: '#FF6B6B',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
    elevation: 4,
  },
  saveButtonDisabled: {
    backgroundColor: '#CCC',
    shadowColor: '#999',
  },
  cancelButtonText: { color: '#FFF', fontWeight: '600', fontSize: 16 },
  saveButtonText: { color: '#FFF', fontWeight: '700', fontSize: 16 },
});
