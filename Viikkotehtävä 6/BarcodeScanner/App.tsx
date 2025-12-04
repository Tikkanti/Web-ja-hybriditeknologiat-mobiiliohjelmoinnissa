import { CameraView, CameraType, useCameraPermissions, BarcodeScanningResult, BarcodeType } from 'expo-camera';
import { useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {

  const [permission, requestPermission] = useCameraPermissions();
  const [barcode, setBarcode] = useState<string | null>(null)
  const [scanned, setScanned] = useState<boolean>(false)

  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={styles.container}>
        <Text style={styles.message}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  const handleBarCodeScanned = (result: BarcodeScanningResult): void => {
    if (!scanned && result?.data) {
      setScanned(true)
      setBarcode(result.data)
    }
  }



  return (
    <View style={styles.container}>
      <CameraView
        style={styles.camera}
        facing="back"
        active={!scanned}
        barcodeScannerSettings={{ barcodeTypes: ["ean13"] }}
        onBarcodeScanned={scanned ? undefined : handleBarCodeScanned}
      />
      <View pointerEvents='box-none' style={StyleSheet.absoluteFill}>
        <View style={styles.overlay} pointerEvents='box-none'>
          {barcode && (
            <View>
              <Text style={styles.resultText}>Barcode: {barcode}</Text>
              <Button title="Scan Again" onPress={() => { setScanned(false); setBarcode(null) }} />
            </View>
          )}
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  message: {
    textAlign: 'center',
    paddingBottom: 10,
  },
  camera: {
    flex: 1,
  },
  overlay: {
    position: 'absolute',
    bottom: 64,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    width: '100%',
    paddingHorizontal: 64,
  },
  resultText: {
    fontSize: 20,
    color: 'white',
  }
});