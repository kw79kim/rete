export default {
    'id': 'test@0.0.1',
    'nodes': {
        '1': {
            'id': 1,
            'data': {
                'num': 2
            },
            'module': {},
            'inputs': {},
            'outputs': {
                'num': {
                    'connections': [{
                        'node': 3,
                        'input': 'num1',
                        'type': 'Name',
                        'data': {}
                    }]
                }
            },
            'position': [80, 200],
            'name': 'Number'
        },
        '2': {
            'id': 2,
            'data': {
                'num': 0
            },
            'module': {},
            'inputs': {},
            'outputs': {
                'num': {
                    'connections': [{
                        'node': 3,
                        'input': 'num2',
                        'type': 'Name',
                        'data': {}
                    }]
                }
            },
            'position': [80, 400],
            'name': 'Number'
        },
        '3': {
            'id': 3,
            'data': {},
            'module': {},
            'inputs': {
                'num1': {
                    'connections': [{
                        'node': 1,
                        'output': 'num',
                        'type': 'Name',
                        'data': {}
                    }]
                },
                'num2': {
                    'connections': [{
                        'node': 2,
                        'output': 'num',
                        'type': 'Name',
                        'data': {}
                    }]
                }
            },
            'outputs': {
                'num': {
                    'connections': []
                }
            },
            'position': [500, 240],
            'name': 'Add'
        }
    }
}