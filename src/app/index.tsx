import { Text, View, TextInput, StyleSheet, TouchableOpacity, Keyboard, Pressable } from 'react-native';
import { useState } from 'react';

export default function HomeScreen() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState<number | null>(null);
  const [category, setCategory] = useState('');

  const calculateBMI = () => {
    const w = parseFloat(weight);
    const h = parseFloat(height) / 10
    0;
    if (w > 0 && h > 0) {
      const bmiValue = w / (h * h);
      setBmi(parseFloat(bmiValue.toFixed(2)));

      if (bmiValue < 18.5) setCategory('Abaixo do peso');
      else if (bmiValue < 24.9) setCategory('Peso normal');
      else if (bmiValue < 29.9) setCategory('Sobrepeso');
      else if (bmiValue < 34.9) setCategory('Obesidade grau I');
      else if (bmiValue < 39.9) setCategory('Obesidade grau II');
      else setCategory('Obesidade grau III');
      Keyboard.dismiss()
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora de IMC</Text>
      <TextInput
        style={styles.input}
        placeholder='Peso(kg)'
        keyboardType='numeric'
        placeholderTextColor="#aaa"
        onChangeText={setWeight}
      />
      <TextInput
        style={styles.input}
        placeholder='Altura(cm)'
        keyboardType='numeric'
        placeholderTextColor="#aaa"
        onChangeText={setHeight}
      />
      <TouchableOpacity
        onPress={calculateBMI}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Calcular IMC</Text>
      </TouchableOpacity>
      {bmi !== null && (
        <View style={styles.resultBox}>
          <Text style={styles.resultText}>Seu IMC é: <Text style={styles.bold}>{bmi}</Text></Text>
           <Text style={styles.resultText}>Classificação: <Text style={styles.bold}>{category}</Text></Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f4f8",
    justifyContent: "center",
    padding: 20,
    alignItems: "center"
  },
  title: {
    fontSize: 28,
    fontWeight: 600,
    marginBottom: 30,
    color: "#333"
  },
  input: {
    width: "90%",
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
    backgroundColor: "#fff",
    fontSize: 16
  },
  button: {
    backgroundColor: "#4facfe",
    width: "90%",
    height: 50,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    elevation: 3
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: 600
  },
  resultBox: {
    marginTop: 30,
    backgroundColor: '#e0f7fa',
    padding: 20,
    borderRadius: 10,
    width: '90%',
    alignItems: 'center',
  },
  resultText: {
    fontSize: 18,
    color: '#333',
    marginBottom: 5,
  },
  bold: {
    fontWeight: 'bold',
    color: "#00796b"
  }    
})