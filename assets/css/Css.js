import { StyleSheet } from "react-native"

const css = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerRow: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textPage: {
    backgroundColor: 'orange',
    padding: 10
  },
  button: {
    marginBottom: 10,
    marginRight: 20,
    padding: 10,
    justifyContent: 'center',
    borderRadius: 3

  },
  photo: {
    marginBottom: 20,
    marginRight: 20,
    marginLeft: 15
  },
  darkBg: {
    backgroundColor: '#333'
  },
  login_form: {
    width: "80%",
  },
  input: {
    backgroundColor: '#fff',
    fontSize: 20,
    padding: 7,
    marginBottom: 20,
    marginTop: 10
  },
  login_msg: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'red',
    marginTop: 10,
    marginBottom: 15
  },
  informacao: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  area_tab: {
    backgroundColor: '#333',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333'
  },
  list: {
    alignItems: "center",
    backgroundColor: "orange",
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  text_list: {
    color: "#333",
    fontWeight: 'bold',
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: 'center',
  },
  border_list: {
    borderBottomWidth: 2,
    borderBottomColor: '#333',
  },
  container_image: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  button_image: {
    marginBottom: 10,
    marginRight: 20,
    padding: 10,
    borderRadius: 3,
    backgroundColor: "#7159c1",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10
  },
  buttonText_image: {
    color: "#fff"
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
    marginRight: 20,
  }
});

export { css };