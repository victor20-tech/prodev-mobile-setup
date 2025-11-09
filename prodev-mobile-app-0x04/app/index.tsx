import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { ImageBackground, View, Text, TouchableOpacity, Image, Dimensions} from "react-native";
import { styles } from "@/styles/_mainstyle";
import { BACKGROUNDIMAGE, HEROLOGO} from "@/constants";

export default function Index() {
  return(
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <ImageBackground 
          source={BACKGROUNDIMAGE} 
          resizeMode="cover" 
          style={styles.backgroundImageContainer}
          >
            <View style={styles.container}>
              {/* Logo Section*/}
              <View style={styles.logoContainer}>
                <Image source={HEROLOGO}/>
              </View>

              {/* Title and Subtitle Section */}
              <View style={styles.titleContainer}>
                <Text style={styles.titleText}>
                  FInd Your Perfect Home
                </Text>
              </View>

              <View style={styles.titleSubTextContainer}>
                <Text style={styles.titleSubText}>
                  Explore countless properties and discover your dream living space.
                </Text>
              </View>

              <View style={{ flex: 1 }} />

              {/* Button Group For Navigation */}
              <View style={styles.buttonGroup}>
                {/* Primary Button (JOIN NOW) */}
                <TouchableOpacity style={styles.buttonPrimary}>
                  <Text style={styles.buttonPrimaryText}>
                    JOIN NOW
                  </Text>
                </TouchableOpacity>

                {/* Secondary Button (SIGN IN) */}
                <TouchableOpacity style={styles.buttonSecondary}>
                  <Text style={styles.buttonSecondaryText}>
                    SIGN IN
                  </Text>
                </TouchableOpacity>
              </View>

              {/* Additional Text */}
              <View style={styles.buttonGroupSubText}>
               <Text style={styles.buttonSecondaryText}> Continue to home </Text> 
              </View>
            </View>
          </ImageBackground>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}