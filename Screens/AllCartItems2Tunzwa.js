import { StyleSheet, Text, View, ScrollView, Pressable } from "react-native";
import React from "react";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";


import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const AllProductsOrders = () => {
  
  const instructions = [
    {
      id: "0",
      name: "Avoid Ringing",
      iconName: "bell",
    },
    {
      id: "1",
      name: "Leave at the door",
      iconName: "door-open",
    },
    {
      id: "2",
      name: "directions to reach",
      iconName: "directions",
    },
    {
      id: "3",
      name: "Avoid Calling",
      iconName: "phone-alt",
    },
  ];


  const cart = [
    {
      id: "0",
      name: "Avoid Ringing",
      iconName: "bell",
      quantity:1,
    },
    {
      id: "1",
      name: "Leave at the door",
      iconName: "door-open",
      quantity:1,
    },
    {
      id: "2",
      name: "directions to reach",
      iconName: "directions",
      quantity:2,
    },
    {
      id: "3",
      name: "Avoid Calling",
      iconName: "phone-alt",
      quantity:3,
    },
  ];
  
  return (
    <>
      <ScrollView style={{ padding: 10, flex: 1, backgroundColor: "#F0F8FF" }}>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
          <Ionicons name="arrow-back" size={24} color="black" />
          <Text>Name</Text>
        </View>

        <View
          style={{
            backgroundColor: "white",
            padding: 8,
            marginTop: 15,
            borderRadius: 8,
          }}
        >
          <Text>
            Delivery in 
            <Text style={{ fontWeight: "500" }}>35 - 40 mins</Text>
          </Text>
        </View>

        <View style={{ marginVertical: 12 }}>
          <Text
            style={{
              textAlign: "center",
              letterSpacing: 3,
              fontSize: 15,
              color: "gray",
            }}
          >
            ITEM(S) ADDED
          </Text>
        </View>

        <View>
          {cart?.map((item, index) => (
            <Pressable
              style={{ backgroundColor: "white", padding: 10 }}
              key={index}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginVertical: 6,
                }}
              >
                <Text style={{ width: 200, fontSize: 16, fontWeight: "600" }}>
                  {item?.name}
                </Text>
                <Pressable
                  style={{
                    flexDirection: "row",
                    paddingHorizontal: 10,
                    paddingVertical: 5,
                    alignItems: "center",
                    borderColor: "#BEBEBE",
                    borderWidth: 0.5,
                    borderRadius: 10,
                  }}
                >
                  <Pressable
                   
                  >
                    <Text
                      style={{
                        fontSize: 20,
                        color: "green",
                        paddingHorizontal: 6,
                        fontWeight: "600",
                      }}
                    >
                      -
                    </Text>
                  </Pressable>

                  <Pressable>
                    <Text
                      style={{
                        fontSize: 19,
                        color: "green",
                        paddingHorizontal: 8,
                        fontWeight: "600",
                      }}
                    >
                      {item.quantity}
                    </Text>
                  </Pressable>

                  <Pressable
                   
                  >
                    <Text
                      style={{
                        fontSize: 20,
                        color: "green",
                        paddingHorizontal: 6,
                        fontWeight: "600",
                      }}
                    >
                      +
                    </Text>
                  </Pressable>
                </Pressable>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                  ₹{item.quantity}
                </Text>
                <Text style={{ fontSize: 15, fontWeight: "500" }}>
                  Quantity : {item?.quantity}
                </Text>
              </View>
            </Pressable>
          ))}

          <View style={{ marginVertical: 10 }}>
            <Text style={{ fontSize: 16, fontWeight: "600" }}>
              Delivery Instructions
            </Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {instructions?.map((item, index) => (
                <Pressable
                  style={{
                    margin: 10,
                    borderRadius: 10,
                    padding: 10,
                    backgroundColor: "white",
                  }}
                >
                  <View
                    style={{ justifyContent: "center", alignItems: "center" }}
                  >
                    <FontAwesome5
                      name={item?.iconName}
                      size={22}
                      color={"gray"}
                    />
                    <Text
                      style={{
                        width: 75,
                        fontSize: 13,
                        color: "#383838",
                        paddingTop: 10,
                        textAlign: "center",
                      }}
                    >
                      {item?.name}
                    </Text>
                  </View>
                </Pressable>
              ))}
            </ScrollView>
          </View>

          <View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                backgroundColor: "white",
                paddingVertical: 10,
                paddingHorizontal: 10,
              }}
            >
              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 6 }}
              >
                <Feather name="plus-circle" size={24} color="black" />
                <Text>Add more Items</Text>
              </View>
              <AntDesign name="right" size={20} color="black" />
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                backgroundColor: "white",
                paddingVertical: 10,
                paddingHorizontal: 10,
              }}
            >
              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 6 }}
              >
                <Entypo name="new-message" size={24} color="black" />
                <Text>Add more cooking instructions</Text>
              </View>
              <AntDesign name="right" size={20} color="black" />
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                backgroundColor: "white",
                paddingVertical: 10,
                paddingHorizontal: 10,
              }}
            >
              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 6 }}
              >
                <MaterialCommunityIcons
                  name="food-fork-drink"
                  size={24}
                  color="black"
                />
                <Text>Dont't send cultery with this order</Text>
              </View>
              <AntDesign name="right" size={20} color="black" />
            </View>
          </View>

          <View>
            <View
              style={{
                padding: 10,
                backgroundColor: "white",
                marginVertical: 10,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Text>Feeding India Donation</Text>
                <AntDesign name="checksquare" size={24} color="#fd5c63" />
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginTop: 10,
                }}
              >
                <Text style={{ color: "gray" }}>
                  Working towards a manlutrition-free India
                </Text>
                <Text>Rs 3</Text>
              </View>
            </View>
          </View>

          <View style={{ marginVertical: 10 }}>
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>
              Billing Details
            </Text>
            <View
              style={{
                backgroundColor: "white",
                borderRadius: 7,
                padding: 10,
                marginTop: 14,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Text
                  style={{ fontSize: 15, fontWeight: "400", color: "#505050" }}
                >
                  Item Total
                </Text>
                <Text
                  style={{ fontSize: 15, fontWeight: "400", color: "#505050" }}
                >
                  ₹total
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginVertical: 8,
                }}
              >
                <Text
                  style={{ fontSize: 15, fontWeight: "400", color: "#505050" }}
                >
                  Delivery Fee
                </Text>
                <Text
                  style={{ fontSize: 15, fontWeight: "400", color: "#505050" }}
                >
                  ₹15.00
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Text
                  style={{ fontSize: 15, fontWeight: "400", color: "#505050" }}
                >
                  Delivery Partner Fee
                </Text>
                <Text
                  style={{ fontSize: 15, fontWeight: "400", color: "#505050" }}
                >
                  ₹75
                </Text>
              </View>

              <View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginVertical: 8,
                  }}
                >
                  <Text style={{ fontWeight: "bold", fontSize: 15 }}>
                    To pay
                  </Text>
                  <Text>₹total</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>

     
        <Pressable
          style={{
            flexDirection: "row",
            alignItems: "center",
            padding: 20,
            justifyContent: "space-between",
            backgroundColor: "white",
          }}
        >
          <View>
            <Text style={{ fontSize: 16, fontWeight: "600" }}>
              Pay Using Cash
            </Text>
            <Text style={{ marginTop: 7, fontSize: 15 }}>Cash on Delivery</Text>
          </View>

          <Pressable
           
            style={{
              backgroundColor: "#fd5c63",
              padding: 10,
              width: 200,
              borderRadius: 6,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 10,
            }}
          >
            <View>
              <Text
                style={{ color: "white", fontSize: 15, fontWeight: "bold" }}
              >
                total 
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  color: "white",
                  fontWeight: "500",
                  marginTop: 3,
                }}
              >
                TOTAL
              </Text>
            </View>
            <Text style={{ fontSize: 16, fontWeight: "500", color: "white" }}>
              Place Order
            </Text>
          </Pressable>
        </Pressable>
      
    </>
  );
};

export default AllProductsOrders;

const styles = StyleSheet.create({});
