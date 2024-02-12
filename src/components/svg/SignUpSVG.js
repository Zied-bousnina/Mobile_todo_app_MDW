import { View, Text, Dimensions } from 'react-native'
import React from 'react'
import { Svg, Path } from 'react-native-svg'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const theme={
colors:{
primary:  '#ad336d',
secondary: '#432371',
}
}
const SignUpSVG = (props) =>(
<Svg
width={windowWidth * 0.8} height={windowHeight * 0.33}
{...props}
 xmlns="http://www.w3.org/2000/svg"  version="1.1" id="Layer_1" x="0px" y="0px"  viewBox="0 0 595.279 595.281" enable-background="new 0 0 595.279 595.281" >
<Path id="color_x5F_2" fill={theme.colors.secondary} d="M336.339,260.714c-1.175,6.332-3.146,17.712-3.146,22.858c0,1.17,0.018,2.562,0.046,4.071  c-0.445,4.486-0.651,8.983-0.28,13.506c0.685,8.359,2.944,16.637,0.248,24.885c-2.188,6.689-9.163,10.667-14.108,15.139  c-1.234,1.117,1.643,1.033,2.311,0.428c0.755-0.682,1.529-1.341,2.311-1.994c-2.641,6.222-0.377,13.398,3.553,19.197  c-0.479,0.056-0.947,0.188-1.172,0.375c-2.158,1.803-4.52,3.188-7.021,4.221c-2.071,0.738-4.417,1.432-6.976,1.954  c-10.851,1.789-23.125-1.298-33.013-5.499l-4.136-2.067c0.32-0.534,0.627-1.083,0.919-1.642c1.379-1.668,3.319-4.699,3.319-8.572  c0-0.771-0.057-1.531-0.151-2.271c0.094-1.585,0.013-3.16-0.28-4.686c0.738,0.604,1.46,1.209,2.146,1.829  c0.733,0.664,3.443-0.439,2.694-1.116c-2.158-1.952-4.479-3.738-6.681-5.642c-0.585-1-1.292-1.956-2.148-2.847  c-0.205-0.213-0.621-0.252-1.069-0.184c-0.977-1.021-1.892-2.102-2.707-3.278c-5.227-7.535-2.685-18.063-1.649-26.433  c1.255-10.15-0.648-20.221-2.023-30.318l-0.128-3.722l-0.667-11.333l2.382-1.19c0.558-0.027,1.124-0.066,1.693-0.112l0.006,0.052  c-0.19,0.184-0.315,0.408-0.322,0.673c-0.356,14.714,2.356,29.288,2,44c-0.033,1.359,2.283,1.174,2.821,0.188  c17.238,0.077,34.462,0.922,51.702,0.982c0.246,1.323,2.938,0.873,2.913-0.386c-0.318-15.682,4.619-30.931,4.5-46.595  c0.353,0.054,0.697,0.12,1.039,0.195l1.074,0.478C336.392,257.479,336.397,259.098,336.339,260.714z M326.786,300.228l-51.541-1.32  c-0.001,0.231-0.006,0.465-0.009,0.696c17.188,0.046,34.362,0.886,51.549,0.981C326.786,300.467,326.786,300.348,326.786,300.228z   M331.286,254.806c-0.041-0.006-0.082-0.01-0.123-0.016l-0.229,8.963C331.192,260.782,331.334,257.802,331.286,254.806z"/>
<Path id="color_x5F_1" d="M291.394,184.907c-3.572,1.025-7.002,0.245-10.564-0.378c-1.514-0.264,1.158-1.404,1.852-1.283  c2.724,0.476,5.697,1.407,8.436,0.622c0.284-0.082,1.456-0.357,1.589,0.132C292.836,184.495,291.679,184.826,291.394,184.907z   M316.68,183.246c-0.692-0.121-3.364,1.02-1.852,1.283c3.563,0.623,6.992,1.403,10.564,0.378c0.285-0.081,1.442-0.412,1.311-0.907  c-0.133-0.489-1.305-0.213-1.59-0.132C322.377,184.652,319.403,183.72,316.68,183.246z M301.669,202.377  c1.48-0.99,2.957-1.982,4.26-3.203c1.262-1.181-1.597-1.28-2.35-0.575c-0.601,0.562-1.24,1.062-1.901,1.537  c-0.934-2.89-0.756-5.949,0.03-8.912c0.306-1.151-2.627-0.729-2.908,0.326c-0.94,3.545-1.051,7.337,0.505,10.725  C299.688,203.108,301.084,202.769,301.669,202.377z M312.477,204.852c1.245-1.367-1.521-1.947-2.445-0.932  c-4.341,4.766-12.699,3.632-16.954-0.688c-0.966-0.979-3.7,0.235-2.646,1.307C296.156,210.349,306.788,211.1,312.477,204.852z   M314.105,170.407c2.348-0.781,4.56-0.296,6.454,1.245c0.6,0.487,3.126-0.653,2.734-0.972c-2.986-2.427-6.737-2.021-10.175-0.876  c-0.113,0.038-1.306,0.524-0.874,0.788C312.729,170.888,313.633,170.564,314.105,170.407z M126.336,323.516  c-0.232-0.127-0.383-0.335-0.373-0.646c0.424-12.801,6.567-28.49,22.153-23.357c0.81,0.266,0.687,0.986,0.064,1.411  c-2.151,1.474-4.548,2.292-6.938,3.204c2.61-0.188,5.222-0.053,7.658,1.044c0.24,0.108,0.317,0.294,0.303,0.541  c-0.021,0.303-0.074,0.579-0.15,0.839c0.094-0.067,0.169-0.142,0.271-0.205c0.882-0.545,2.742-0.146,2.361,0.603  c2.313,2.685,5.301,5.838,5.911,9.48c0.585,3.493-0.298,6.906-1.267,10.252c3.242-0.428,6.731-0.107,9.953-0.043  c7.146,0.144,14.288,0.402,21.429,0.719c7.262,0.322,14.523,0.679,21.773,1.197c3.002,0.215,6.298,0.209,9.354,0.763  c3.357-7.751,7.077-15.34,10.438-23.092c3.697-8.522,6.128-17.412,9.541-26.017c4.758-11.994,12.573-19.731,24.469-24.553  c0.008-0.192,0.007-0.386,0.017-0.578c0.043-0.81,2.271-1.372,2.788-0.731c6.146,0.006,13.279-0.843,17.219-5.888  c0.14-0.178,0.273-0.367,0.41-0.551c-13.343,2.849-30.323,0.308-40.419-9.098c-6.691-6.232-9.557-14.89-7.45-23.886  c2.377-10.151,8.633-18.653,11.965-28.472c3.609-10.639,5.876-21.601,8.396-32.525c1.172-5.084,2.544-10.338,4.72-15.175  c0.866-2.736,2.468-5.333,4.586-7.712c0.333-0.423,0.678-0.838,1.035-1.244c10.998-12.485,26.831-14.815,42.283-11.798  c1.478,0.128,2.354,0.241,2.354,0.241s0.843,0.211,3.114,0.866c6.081-0.419,12.294,0.688,16.688,5.327  c5.635,5.948,8.323,13.979,11.456,21.383c7.123,16.838,15.98,33.751,20.477,51.558c2.958,11.715,4.646,25.658-1.207,36.82  c-5.725,10.922-16.614,16.173-28.229,18.517l-1.405,0.526c0.146,0.045,0.299,0.078,0.448,0.115c0.522-0.103,1.08-0.032,1.405,0.271  c0.919,0.146,1.855,0.279,2.778,0.457c0.794-0.582,2.447-0.747,2.482-0.081c0.014,0.253,0.012,0.505,0.021,0.758  c0.133,0.05,0.268,0.094,0.397,0.148c0.041,0.019-0.023,0.083-0.131,0.162c0.149,0.001,0.287,0.021,0.4,0.065  c12.839,5.082,20.692,13.908,25.194,26.859c2.881,8.283,5.468,16.562,9.021,24.604c3.506,7.938,7.248,15.767,10.559,23.79  c3.243-0.603,6.71-0.684,9.901-0.966c7.313-0.646,14.636-1.178,21.962-1.649c6.976-0.449,13.954-0.862,20.939-1.144  c2.865-0.115,5.962-0.464,8.915-0.294c-0.934-3.229-1.841-6.896-0.806-10.104c1.118-3.459,3.438-6.207,5.771-8.924  c0.003-0.073,0.095-0.171,0.246-0.28c0.178-0.189,0.456-0.327,0.768-0.407c0.639-0.267,1.404-0.443,1.755-0.228  c0.128,0.079,0.245,0.165,0.358,0.252c0.13-0.135,0.277-0.254,0.454-0.333c1.313-0.592,2.667-0.911,4.038-1.063  c-2.313-0.854-4.373-1.973-4.823-3.654c-0.996-3.717,7.03-3.125,8.858-2.754c9.649,1.958,14.476,14.727,13.557,23.456  c-0.002,0.013-0.007,0.023-0.009,0.038c0.097,0.039,0.154,0.094,0.15,0.168c-0.67,13.176-20.471,18.063-30.499,21.577  c-18.265,6.398-37.212,11.91-56.531,13.892c-5.397,0.554-10.931,0.957-16.352,0.433c-2.111-0.204-5.822-0.31-7.429-2.003  c-13.976-14.733-17.155-36.843-29.527-52.662c0.112,1.369,0.246,2.745,0.418,4.14c0.873,7.06,1.73,15.364-2.578,21.577  c-1.354,1.951-2.969,3.644-4.691,5.229c0.08,0.085,0.066,0.205-0.087,0.365c-9.047,9.414-1.195,22.227,6.68,29.297  c8.424,7.563,15.031,15.731,15.558,27.188c0.278-0.087,0.529-0.138,0.684-0.124c20.538,1.812,42.154,8.842,60.43,18.174  c10.658,5.442,25.764,14.127,27.524,27.409c1.971,14.861-13.62,28.019-26.306,32.252c-18.599,6.207-38.215,0.424-56.006-5.809  c-21.112-7.396-42.953-17.588-65.781-17.074c-0.795,0.428-1.58,0.872-2.38,1.292c-21.924,11.499-46.049,21.465-71.01,23.22  c-19.713,1.386-47.427-1.972-58.383-21.078c-9.139-15.936-2.059-34.911,14.913-41.772c23.556-9.524,49.243-16.051,74.812-15.397  c0.587-11.143,6.979-20.536,15.76-27.415c7.675-6.013,13.378-19.068,8.422-28.163c-2.721-2.275-5.258-4.74-6.811-7.835  c-3.498-6.975-2.542-14.665-1.557-22.129c0.094-0.712,0.152-1.421,0.222-2.131c-6.634,8.248-10.052,18.367-14.986,27.699  c-2.526,4.779-4.722,9.772-7.474,14.43c-1.891,3.196-4.09,7.437-7.184,9.605c-5.912,4.146-16.748,2.481-23.326,1.808  c-19.369-1.986-38.449-7.31-56.742-13.824C146.427,341.082,127.488,336.484,126.336,323.516z M253.02,393.856  c0,0.048-0.005,0.095-0.004,0.143c0.001,0.036-0.011,0.069-0.017,0.104c0.24-0.157,0.362-0.396,0.205-0.771  C253.28,393.509,253.194,393.69,253.02,393.856z M351.689,392.821c0,0.066,0.004,0.133,0.004,0.199  c0.605,0.225,0.437,0.979-0.765,1.35c-0.084,0.025-0.169,0.048-0.252,0.073c-0.143,0.051-0.288,0.095-0.436,0.126  c-20.424,6.192-42.225,6.89-63.368,5.065c-8.473-0.73-16.908-1.826-25.283-3.3c-2.536-0.447-5.067-0.923-7.597-1.407  c-0.472-0.09-0.941-0.177-1.413-0.264c-0.801,0.552-2.427,0.706-2.46,0.125c-13.787-0.444-27.671,1.456-41.063,4.639  c-6.573,1.563-13.098,3.352-19.498,5.521c-6.067,2.056-12.909,3.979-18.257,7.645c-18.658,12.79-13.885,38.162,4.855,48.292  c22.644,12.238,50.455,9.024,74.025,1.435c22.83-7.352,44.176-18.729,64.303-31.663c0.001-0.016-0.005-0.027-0.003-0.044  c0.702-5.19-1.28-10.689-5.992-13.232c-0.364,0.116-0.754,0.133-1.074-0.019c-15.904-7.431-36.182-1.312-52.834,0.364  c-17.21,1.731-37.526,1.168-52.367,11.321c-1.169,0.8-3.546-0.209-1.922-1.32c2.516-1.721,5.165-3.147,7.913-4.346  c-9.969-7.736,1.322-16.246,10.3-17.594c4.136-0.621,8.993,2.331,12.499,4.147c4.334,2.248,8.755,5.133,13.5,6.583  c3.504-0.276,6.966-0.552,10.335-0.911c17.102-1.82,37.869-7.85,54.25-0.195c0.2,0.094,0.343,0.2,0.441,0.315  c0.23-0.025,0.433-0.017,0.563,0.042c2.39,1.066,4.193,2.746,5.427,4.774c3.527-7.363,16.365-10.718,23.056-12.333  c5.462-1.319,11.158-2.372,16.803-2.242c2.817,0.065,7.44,0.063,9.469,2.482c10.288,12.279-41.271,20.362-46.965,22.44  c-0.077,0.166-0.229,0.338-0.497,0.511c-7.421,4.797-14.989,9.375-22.735,13.631c21.949-0.15,42.773,9.098,63.111,16.286  c20.015,7.076,45.931,16.095,65.04,1.966c12.456-9.21,20.366-24.049,8.759-37.229c-10.383-11.789-26.315-18.487-40.816-23.576  C378.226,398.089,364.965,394.151,351.689,392.821z M342.225,423.665c4.571-1.148,22.902-4.565,20.733-12.341  c-2.014-7.215-18.194-3.205-23.027-2.037c-6.699,1.617-20.46,4.758-22.232,12.9c-0.072,0.337-0.514,0.615-1.028,0.782  c0.73,2.065,0.978,4.341,0.745,6.637C325.354,426.708,334.055,425.717,342.225,423.665z M239.794,416.9  c-5.49-2.162-10.538-5.814-15.907-8.054c-5.308-2.213-11.185-2.239-15.139,2.849c-3.214,4.138-1.539,7.767,2.104,10.615  C219.926,418.9,229.937,417.732,239.794,416.9z M330.174,362.52c-0.742-0.83-1.457-1.713-2.136-2.636  c-15.037,12.178-38.255,7.529-54.412-0.079c-0.478,0.667-0.973,1.311-1.486,1.916c-3.924,4.621-9.061,8.006-12.727,12.918  c-4.133,5.539-6.259,11.452-6.371,18.273c1.928,0.03,4.096,0.807,5.702,1.107c7.283,1.365,14.607,2.536,21.975,3.358  c22.63,2.526,46.069,2.642,68.083-3.795c-0.026-6.931-2.021-13.396-6.409-18.89C338.746,370.129,334.021,366.821,330.174,362.52z   M455.991,309.918c0.046,1.038-0.134,2.132-0.354,3.134c-0.07,0.318-0.639,2.369-0.893,4.089c0.273-0.277,0.565-0.542,0.873-0.793  c-0.71-2.778,0.698-4.529,2.866-5.571C457.57,310.582,456.71,310.306,455.991,309.918z M339.294,257.354  c0.026,7.313-1.026,14.538-2.038,21.792c-0.959,6.88-1.388,13.415-1.146,20.098c12.678,13.495,17.111,33.188,26.826,48.68  c2.755,4.394,4.896,8.207,10.091,8.952c4.313,0.619,8.717,0.55,13.053,0.242c17.697-1.259,35.225-5.81,52.006-11.396  c7.121-2.371,14.51-4.658,21.351-7.806c6.122-2.817,13.984-7.022,14.371-14.641c0.002-0.035,0.016-0.067,0.024-0.101  c-0.158-0.165-0.245-0.393-0.215-0.693c0.724-6.859-2.118-15.772-8.104-19.746c-1.711-1.136-3.748-2.113-5.87-1.989  c-2.304,0.135-3.55,0.123-0.732,1.385c2.726,1.222,5.628,1.993,8.341,3.237c1.052,0.482,0.656,1.375-0.101,1.844  c-0.365,0.399-0.949,0.696-1.548,0.611c-2.618-0.368-5.464-0.835-8.061-0.142c1.551,1.424,6.18,1.362,7.704,1.602  c0.211,0.032,0.375,0.091,0.511,0.16c0.688,0.012,1.329,0.056,1.88,0.125c0.641,0.082,0.709,0.696,0.291,1.085  c-0.548,0.51-1.335,0.642-2.049,0.55c-0.117-0.016-0.243-0.026-0.366-0.038c-0.348,0.247-0.792,0.395-1.243,0.323  c-0.56-0.087-1.306-0.148-2.134-0.223c-2.032,0.348-3.8,1.312-3.74,3.381c3.897-1.756,8.681-1.59,11.203,2.157  c0.702,1.042-2.104,2.022-2.684,1.162c-2.599-3.857-7.698-3.048-10.304,0.262c5.162,0.868,10.1,1.569,13.486,6.076  c0.743,0.988-2.052,2.002-2.684,1.162c-2.815-3.746-6.73-4.619-10.933-5.323c-0.069,0.026-0.139,0.053-0.223,0.081  c-2.758,0.904-5.193,0.926-4.459-2.573c0.495-2.359,2.058-6.122,1.004-8.618c-1.938,2.233-4.002,4.751-4.486,7.639  c-0.59,3.524,0.404,6.961,1.388,10.326c0.283,0.976-1.681,1.683-2.539,1.204c-0.105,0.009-0.205,0.012-0.29-0.003  c-3.739-0.646-8.078,0.021-11.834,0.19c-7.011,0.316-14.019,0.728-21.021,1.195c-6.895,0.461-13.789,0.954-20.671,1.585  c-2.6,0.239-5.435,0.292-8.107,0.726c-0.032,0.906-2.354,1.542-2.884,0.632c-1.33,0.25-1.682-0.795-0.598-1.376  c-3.313-8.02-7.091-15.825-10.552-23.78c-3.332-7.662-5.85-15.486-8.587-23.361C358.231,271.385,351.428,262.664,339.294,257.354z   M295.115,144.23c0.984-0.465,1.987-0.868,3.005-1.209C297.099,143.255,296.097,143.674,295.115,144.23z M320.446,156.904  c0.983,3.02,2.271,5.857,3.783,8.563C322.729,162.526,321.467,159.57,320.446,156.904z M352.772,242.47  c-2.242,1.837-4.478,3.362-6.341,4.521C348.735,245.72,350.862,244.211,352.772,242.47z M279.707,121.302  c1.578-0.663,3.19-1.25,4.821-1.729c3.056-0.897,6.4-1.406,9.657-1.674C289.166,117.98,284.224,118.953,279.707,121.302z   M284.648,246.597c0.527-0.791,1.032-1.625,1.505-2.495c-0.628,0.999-1.22,1.895-1.646,2.528  C284.553,246.62,284.601,246.608,284.648,246.597z M272.848,256.029c0.232,0.158,0.384,0.401,0.375,0.75  c-0.342,14.089,2.124,28.051,2.021,42.129c-0.001,0.231-0.006,0.465-0.009,0.696c17.188,0.046,34.362,0.886,51.549,0.981  c0-0.119,0-0.238,0-0.357c0.049-12.268,3.079-24.291,4.146-36.476c0.26-2.972,0.4-5.951,0.354-8.947  c-0.041-0.006-0.082-0.01-0.123-0.016c-1.218-0.181-2.395-0.452-3.43-1.046c-1.441-0.829-2.806-2.008-4.064-3.308l-0.476-0.198  c0,0-0.139-0.256-0.378-0.719c-0.979-1.09-1.888-2.224-2.703-3.288c-4.46-5.819-9.193-14.217-6.654-21.826  c2.299-6.884,8.803-11.46,13.967-16.163c5.922-5.396,10.349-11.066,11.615-18.893c-3.81-5.051-8.43-9.756-12.456-15.102  c-4.808-6.379-8.635-13.119-10.189-21.045c-0.406-2.07-0.701-4.149-0.928-6.232c-0.442,0.094-0.854,0.097-1.071-0.071  c-0.759-0.588-1.534-1.089-2.316-1.525c-2.448-0.679-5.541-1.457-8.753-2.08c-6.884,0.301-13.599,4.721-17.96,10.682  c-4.097,5.601-5.578,11.302-5.991,17.569c0.009-0.247,0.235-0.531,0.798-0.798c3.334-1.588,6.801-2.203,10.463-1.681  c0.637,0.092,0.715,0.694,0.291,1.088c-0.542,0.507-1.339,0.65-2.049,0.55c-2.68-0.384-5.115,0.167-7.537,1.319  c-0.907,0.433-1.973,0.077-1.967-0.468c-0.141,2.123-0.157,4.311-0.111,6.58c0.101,4.955,0.62,12.251-3.308,16.069  c-1.552,1.507-3.354,2.396-5.275,2.87c-0.015,0.009-0.025,0.016-0.039,0.024c4.296,13.7,23.261,20.881,21.569,36.502  c-0.785,7.251-4.189,14.929-10.234,19.317C279.576,254.663,276.239,255.571,272.848,256.029z M268.91,256.382  c-0.952,0.045-1.875,0.063-2.757,0.065c-0.127,5.413,0.438,10.801,1.17,16.181c1.375,10.098,3.278,20.167,2.023,30.317  c-1.034,8.371-3.576,18.898,1.649,26.434c0.815,1.177,1.73,2.257,2.707,3.278c0.448-0.068,0.864-0.029,1.069,0.184  c0.856,0.891,1.563,1.847,2.148,2.847c2.201,1.903,4.521,3.689,6.681,5.642c0.749,0.677-1.961,1.78-2.695,1.115  c-0.685-0.618-1.405-1.225-2.145-1.828c0.293,1.525,0.374,3.101,0.28,4.686c-0.22,3.705-1.406,7.473-3.168,10.844  c-0.292,0.559-0.599,1.106-0.919,1.642c-0.028,0.047-0.06,0.093-0.089,0.141c1.349,0.659,2.76,1.305,4.225,1.927  c9.889,4.201,22.163,7.288,33.013,5.499c2.409-0.396,4.748-1.034,6.976-1.954c2.5-1.032,4.861-2.417,7.021-4.221  c0.225-0.188,0.692-0.319,1.172-0.375c-3.93-5.798-6.192-12.976-3.553-19.197c-0.78,0.653-1.556,1.313-2.311,1.994  c-0.669,0.605-3.545,0.689-2.311-0.428c4.945-4.473,11.921-8.449,14.108-15.139c2.696-8.248,0.437-16.525-0.248-24.885  c-0.371-4.522-0.165-9.02,0.28-13.506c0.894-8.976,2.771-17.911,3.1-26.93c0.059-1.616,0.053-3.234-0.003-4.856  c-0.002-0.06-0.003-0.12-0.005-0.179c-0.35-0.117-0.704-0.219-1.069-0.298c-0.342-0.075-0.688-0.143-1.039-0.195  c0.119,15.664-4.819,30.913-4.5,46.594c0.025,1.26-2.667,1.709-2.913,0.387c-17.239-0.062-34.463-0.905-51.702-0.982  c-0.538,0.985-2.854,1.172-2.822-0.188c0.357-14.713-2.355-29.286-2-44c0.008-0.265,0.133-0.489,0.323-0.674  c0.021-0.02,0.044-0.037,0.066-0.058c-0.024,0.002-0.048,0.004-0.072,0.006C270.033,256.316,269.466,256.355,268.91,256.382z   M145.92,315.304c-0.101,0.08-0.239,0.147-0.401,0.204c0.937,0.294,1.818,0.708,2.585,1.284c-0.253-1.021-0.535-2.037-0.75-3.066  C147.026,314.35,146.426,314.895,145.92,315.304z M147.428,308.593c-1.287,0.796-3.088,1.111-4.807,1.288  c0.573,0.119,1.141,0.251,1.684,0.413c0.859,0.255,2.054,0.594,2.748,1.31C146.981,310.537,147.067,309.509,147.428,308.593z   M129.222,322.776c0.374,7.361,8.373,11.771,14.34,14.406c6.46,2.854,13.251,5.144,19.94,7.37  c16.432,5.471,33.43,10.188,50.728,11.829c4.854,0.46,9.792,0.793,14.658,0.323c4.282-0.414,6.07-1.136,8.729-4.817  c11.312-15.662,15.094-36.501,28.591-50.594c0.07-0.074,0.157-0.136,0.249-0.193c0.544-14.826-3.591-29.266-3.205-44.141  c-12.938,5.659-19.514,15.615-23.729,29.007c-5.197,16.526-13.342,31.687-19.835,47.69c-0.326,0.804-3.137,1.118-2.871,0.463  c0.44-1.085,0.894-2.166,1.353-3.243c-3.587-0.966-7.731-0.87-11.385-1.117c-6.616-0.449-13.24-0.797-19.865-1.091  c-6.944-0.31-13.894-0.581-20.842-0.732c-3.563-0.077-7.544-0.582-11.079,0.042c-0.272,0.048-0.48,0.064-0.641,0.059  c-0.629,0.058-1.15-0.06-1.044-0.428c1.008-3.45,2.364-7.548,1.206-11.135c-0.904-2.8-2.689-5.105-4.567-7.322  c-0.672,2.525,1.155,6.452,1.391,8.544c0.35,3.113-2.332,3.93-4.953,3.07c-0.648-0.213-0.699-0.573-0.458-0.916  c-3.995,0.659-7.668,1.396-10.354,4.973c-0.453,0.602-3.289,0.987-2.646,0.133c3.354-4.46,8.291-5.451,13.396-6.314  c-1.263-1.447-3.24-2.146-5.129-2.326c-1.238-0.116-4.246-0.501-5.01,0.841c-0.438,0.771-3.163,0.979-2.87,0.466  c1.339-2.354,5.273-2.659,7.646-2.71c0.779-0.018,1.591,0.02,2.398,0.123c0.054-0.071,0.121-0.146,0.226-0.229  c2.529-2.042-0.633-2.917-2.559-3.255c-2.419-0.424-5.022-0.654-7.472-0.342c-2.006,0.256-1.026-1.458,0.388-1.64  c1.319-0.168,2.728-0.233,4.144-0.196c0.25-0.365,0.762-0.725,1.354-0.813c1.467-0.218,5.686,0.174,6.536-1.275  c0.978-1.664-2.808-1.567-3.847-1.551c-1.704,0.028-3.385,0.245-5.07,0.483c-1.729,0.244-1.24-1.018-0.166-1.497  c-0.151-0.316,0.013-0.715,0.752-1.047c2.322-1.043,4.789-1.712,7.042-2.867c-11.982-2.624-15.382,11.521-15.793,21.303  C129.085,322.263,129.208,322.481,129.222,322.776z M476.821,474.58c-115.667,0-231.333,0-347,0c-1.063,0-3.093,1.613-1.135,1.613  c115.667,0,231.333,0,347,0C476.751,476.194,478.779,474.58,476.821,474.58z M118.807,460.55  c-8.486,22.457-43.834,21.407-54.046,1.141c-0.545-1.082,1.093-1.969,2.074-1.71c0.356-0.172,0.74-0.296,1.015-0.296  c16.216,0,32.435,0,48.65,0C117.442,459.067,119.29,459.275,118.807,460.55z M115.668,461.089c-15.959,0-31.918,0-47.878,0  C77.295,478.494,107.349,480.735,115.668,461.089z M90.871,420.224c0.419-1.059,2.803-1.366,2.853,0.051  c0.255,7.38,4.438,12.083,8.158,17.993c2.146,3.407,3.955,7.709,2.675,11.788c-2.613,8.327-11.729,10.55-19.269,8.319  C68.367,456.289,87.533,428.657,90.871,420.224z M83.356,455.087c0.189,0.011,0.367,0.052,0.518,0.133  c0.712,0.388,1.431,0.704,2.149,0.96c0.952,0.18,2.063,0.238,3.361,0.15c0.798-0.055,1.17,0.263,1.229,0.666  c8.26,0.039,14.794-7.647,9.175-16.567c-3.329-5.286-6.927-9.666-8.363-15.415C86.585,434.033,77.083,450.404,83.356,455.087z   M529.972,461.634c0.229,0.197,0.326,0.497,0.168,0.916c-8.638,22.822-43.736,19.618-53.712-0.193  c-0.647-1.285,1.785-2.298,2.539-1.438c0.316-0.14,0.643-0.234,0.883-0.234c16.666,0,33.333,0,50,0  C531.056,460.684,530.665,461.224,529.972,461.634z M527.441,462.089c-15.933,0-31.866,0-47.801,0  c9.617,16.949,39.861,20.922,47.729,0.134C527.389,462.176,527.417,462.133,527.441,462.089z M495.229,457.963  c-7.342-7.357,4.529-28.714,7.642-36.74c0.412-1.063,2.804-1.362,2.853,0.051c0.239,6.907,3.885,11.625,7.563,17.104  c2.683,3.998,4.271,8.146,3.365,13.021c-1.389,7.5-8.611,9.997-15.193,9.035c-2.058-0.165-3.684-0.667-4.938-1.446  c-0.3-0.139-0.596-0.281-0.882-0.437C495.321,458.383,495.21,458.176,495.229,457.963z M499.784,457.71  c0.471,0.164,0.947,0.306,1.436,0.419c1.05,0.211,2.252,0.297,3.666,0.202c0.332-0.022,0.586,0.022,0.779,0.108  c4.199-0.41,7.904-2.896,8.275-8.025c0.297-4.083-1.003-7.463-3.31-10.761c-3.072-4.39-5.859-8.394-7.131-13.267  C498.895,436.384,490.676,454.117,499.784,457.71z" fill="#000000"/>
</Svg>
)
export default SignUpSVG
